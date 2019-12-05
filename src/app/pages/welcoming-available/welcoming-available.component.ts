import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {WelcomingAvailableService} from '../../shared/service/welcoming-available.service';
import {WelcomingAvailableModel} from '../../shared/model/welcoming-available.model';
import {WelcomingModel} from '../../shared/model/welcoming.model';
import {PersonModel} from '../../shared/model/person.model';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'app-welcoming-available',
  templateUrl: './welcoming-available.component.html',
  styleUrls: ['./welcoming-available.component.sass']
})
export class WelcomingAvailableComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  welcomingAvailable: WelcomingAvailableModel;

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
    private service: WelcomingAvailableService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.WELCOMING_AVAILABLE);
    this.welcomingAvailable = new WelcomingAvailableModel();
    this.welcomingAvailable.welcoming = new WelcomingModel();
    this.welcomingAvailable.welcoming.person = new PersonModel();
    this.welcomingAvailable.welcoming.person.contact = new ContactModel();
    this.welcomingAvailable.welcoming.person.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.welcomingAvailable = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      onChat: ['', Validators.required],
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
    if (this.welcomingAvailable.id) {
      this.service.update(this.welcomingAvailable).subscribe(() => {
        this.router.navigate(['welcomings-availables']).then(() => {
          this.toastrService.success('The Welcoming Available was updated!', 'Welcoming Available Updated');
        });
      });
    } else {
      this.service.create(this.welcomingAvailable).subscribe(() => {
        this.router.navigate(['/aid-institutions']).then(() => {
          this.toastrService.success('A new Welcoming Available was added!', 'Welcoming Available Saved');
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
