import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../menu-item';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {AidInstitutionModel} from '../../shared/model/aid-institution.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AidInstitutionService} from '../../shared/service/aid-institution.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';

@Component({
  selector: 'app-aid-institution',
  templateUrl: './aid-institution.component.html',
  styleUrls: ['./aid-institution.component.sass']
})
export class AidInstitutionComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  aidInstitution: AidInstitutionModel;

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
    super(BaseMenuTypes.AID_INSTITUTION);
    this.aidInstitution = new AidInstitutionModel();
    this.aidInstitution.contact = new ContactModel();
    this.aidInstitution.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.aidInstitution = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      urlSite: ['', Validators.required],
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
    if (this.aidInstitution.id) {
      this.service.update(this.aidInstitution).subscribe(() => {
        this.router.navigate(['aid-institutions']).then(() => {
          this.toastrService.success('The Aid Institution was updated!', 'Aid Institution Updated');
        });
      });
    } else {
      this.service.create(this.aidInstitution).subscribe(() => {
        this.router.navigate(['/aid-institutions']).then(() => {
          this.toastrService.success('A new Aid Institution was added!', 'Aid Institution Saved');
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
