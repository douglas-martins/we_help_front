import {Component, OnInit} from '@angular/core';
import {FileModel} from '../../../shared/model/file.model';
import {FileService} from '../../../shared/service/file.service';
import {Router} from '@angular/router';
import {MenuItem} from '../../menu-item';
import {BaseMenuTypes} from '../../../shared/base/base-menu';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.sass']
})
export class FileListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  files: Array<FileModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  /**
   * Default class constructor.
   * @param service:
   * @param router:
   */
  constructor(
    private service: FileService,
    private router: Router
  ) {
    super(BaseMenuTypes.FILE);
    this.service.findAll().subscribe((data) => {
      this.files = data;
      this.keys = (typeof this.files[0] !== 'undefined' ? Object.keys(this.files[0]) : new Array<string>());
    });
  }

  ngOnInit() {
  }

  /**
   * Remove a element from the base.
   * @param id: number with value of id for the object that will be deleted.
   */
  remove(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.service.findAll().subscribe((data) => {
        this.files = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
