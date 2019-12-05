import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AidInstitutionModel} from '../../shared/model/aid-institution.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AidInstitutionService} from '../../shared/service/aid-institution.service';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Contact model object **/
  contact: ContactModel;

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
    private service: AidInstitutionService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.CONTACT);
    this.contact = new ContactModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.contact = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      telephone: ['', Validators.required],
      email: ['', Validators.required],
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
    if (this.contact.id) {
      this.service.update(this.contact).subscribe(() => {
        this.router.navigate(['contacts']).then(() => {
          this.toastrService.success('The Contact was updated!', 'Contact Updated');
        });
      });
    } else {
      this.service.create(this.contact).subscribe(() => {
        this.router.navigate(['/aid-institutions']).then(() => {
          this.toastrService.success('A new Contact was added!', 'Contact Saved');
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
