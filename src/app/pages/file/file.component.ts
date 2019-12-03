import { Component, OnInit } from '@angular/core';
import {FileModel} from '../../shared/model/file.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../shared/service/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent implements OnInit {
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
    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.file = data;
      });
    } else {
      this.file = new FileModel();
    }
  }

  ngOnInit() {
  }

  /**
   * Persist the model on the request.
   */
  save(): void {

  }
}
