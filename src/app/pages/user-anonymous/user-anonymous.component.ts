import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../menu-item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAnonymousModel} from '../../shared/model/user-anonymous.model';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UserAnonymousService} from '../../shared/service/user-anonymous.service';

@Component({
  selector: 'app-user-anonymous',
  templateUrl: './user-anonymous.component.html',
  styleUrls: ['./user-anonymous.component.sass']
})
export class UserAnonymousComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** User Anonymous model object **/
  userAnonymous: UserAnonymousModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserAnonymousService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.USER_ANONYMOUS);
    this.userAnonymous = new UserAnonymousModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.userAnonymous = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required]
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
    if (this.userAnonymous.id) {
      this.service.update(this.userAnonymous).subscribe(() => {
        this.router.navigate(['users-anonymous']).then(() => {
          this.toastrService.success('The User Anonymous was updated!', 'User Anonymous Updated');
        });
      });
    } else {
      this.service.create(this.userAnonymous).subscribe(() => {
        this.router.navigate(['/users-anonymous']).then(() => {
          this.toastrService.success('A new User Anonymous was added!', 'User Anonymous Saved');
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
