import {Component, OnInit} from '@angular/core';
import {FileModel} from '../../shared/model/file.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../shared/service/file.service';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {MenuItem} from '../menu-item';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** File model object **/
  file: FileModel;

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
    private service: FileService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.FILE);
    this.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.file = data;
      });
    }

    this.formGroup = this.formBuilder.group({
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
    if (this.file.id) {
      // this.service.update(this.file).subscribe(() => {
      //   this.router.navigate(['files']).then(() => {
      //     this.toastrService.success('The File was updated!', 'File Updated');
      //   });
      // });
    } else {
      this.service.create(this.file).subscribe(() => {
        this.router.navigate(['/files']).then(() => {
          this.toastrService.success('A new File was added!', 'File Saved');
        });
      });
    }
  }

  /**
   * Check if the forms control has some errors and emit toastr error.
   */
  checkFormControlError(): void {
    const errors = Object.keys(this.formGroup.controls).map((key) => {
      if (Object.keys(this.formGroup.controls[key].errors).length > 0) {
        return {name: key, fc: this.formGroup.controls[key]};
      }
    }).filter(key => key);

    if (errors.length > 0) {
      this.toastrService.error('The field ' + errors[0].name + ' is required.', 'Error On Save', {
        timeOut: 3000
      });
    }
  }
}
