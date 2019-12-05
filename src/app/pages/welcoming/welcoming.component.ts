import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {WelcomingModel} from '../../shared/model/welcoming.model';
import {MenuItem} from '../menu-item';
import {WelcomingService} from '../../shared/service/welcoming.service';
import {PersonModel} from '../../shared/model/person.model';

@Component({
  selector: 'app-welcoming',
  templateUrl: './welcoming.component.html',
  styleUrls: ['./welcoming.component.sass']
})
export class WelcomingComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  welcoming: WelcomingModel;

  /**
   * Default class constructor.
   * @param route:
   * @param router:
   * @param service:
   * @param formBuilder:
   * @param toastrService:
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WelcomingService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.WELCOMING);
    this.welcoming = new WelcomingModel();
    this.welcoming.person = new PersonModel();
    this.welcoming.person.contact = new ContactModel();
    this.welcoming.person.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.welcoming = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /**
   * Persist the model on the request.
   */
  save(): void {
    if (this.formGroup.valid) {
      this.persistModel();
    } else {
      this.checkFormControlError();
    }
  }

  /**
   * Try to persist the model on the db.
   */
  persistModel(): void {
    if (this.welcoming.id) {
      this.service.update(this.welcoming).subscribe(() => {
        this.router.navigate(['welcomings']).then(() => {
          this.toastrService.success('The Welcoming was updated!', 'Welcoming Updated');
        });
      });
    } else {
      this.service.create(this.welcoming).subscribe(() => {
        this.router.navigate(['/welcomings']).then(() => {
          this.toastrService.success('A new Welcoming was added!', 'Aid Welcoming Saved');
        });
      });
    }
  }

  /**
   * Check if the forms control has some errors and emit toastr error.
   */
  checkFormControlError(): void {
    const errors: Array<{name: string, error: object}> = new Array<{name: string, error: object}>();

    for (const key in this.formGroup.controls) {
      if (this.formGroup.controls[key].errors !== null && Object.keys(this.formGroup.controls[key].errors).length > 0) {
        errors.push({name: key, error: this.formGroup.controls[key].errors});
      }
    }
    if (errors.length > 0) {
      this.toastrService.error('The field ' + errors[0].name + ' is required.', 'Error On Save', {
        timeOut: 3000
      });
    }
  }
}
