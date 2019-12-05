import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../menu-item';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {PersonService} from '../../shared/service/person.service';
import {PersonModel} from '../../shared/model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  person: PersonModel;

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
    private service: PersonService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.PERSON);
    this.person = new PersonModel();
    this.person.contact = new ContactModel();
    this.person.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.person = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  ngOnInit() {
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
    if (this.person.id) {
      this.service.update(this.person).subscribe(() => {
        this.router.navigate(['persons']).then(() => {
          this.toastrService.success('The Persons was updated!', 'Person Updated');
        });
      });
    } else {
      this.service.create(this.person).subscribe(() => {
        this.router.navigate(['/persons']).then(() => {
          this.toastrService.success('A new Person was added!', 'Person Saved');
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
