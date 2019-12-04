import {Component, OnInit} from '@angular/core';
import {FileModel} from '../../shared/model/file.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../shared/service/file.service';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent extends MenuItem implements OnInit {
  /** File model object **/
  file: FileModel;

  /**
   * Default class constructor.
   * @param route:
   * @param router:
   * @param service:
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FileService
  ) {
    super(BaseMenuTypes.FILE);
    this.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.file = data;
      });
    }
  }

  ngOnInit(): void {
  }

  /**
   * Persist the model on the request.
   */
  save(): void {
    if (this.file.id) {
      this.service.update(this.file).subscribe(() => {
        this.router.navigate(['files']);
      });
    } else {
      this.service.create(this.file).subscribe(() => {
        this.router.navigate(['/files']);
      });
    }
  }
}
