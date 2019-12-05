import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {MenuItem} from '../../menu-item';
import {WelcomingAvailableModel} from '../../../shared/model/welcoming-available.model';
import {WelcomingAvailableService} from '../../../shared/service/welcoming-available.service';

@Component({
  selector: 'app-welcoming-available-list',
  templateUrl: './welcoming-available-list.component.html',
  styleUrls: ['./welcoming-available-list.component.sass']
})
export class WelcomingAvailableListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  welcomingsAvailables: Array<WelcomingAvailableModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: WelcomingAvailableService,
    private router: Router
  ) {
    super(BaseMenuTypes.WELCOMING_AVAILABLE);
    this.service.findAll().subscribe((data) => {
      this.welcomingsAvailables = data;
      this.keys = (typeof this.welcomingsAvailables[0] !== 'undefined' ? Object.keys(this.welcomingsAvailables[0]) : new Array<string>());
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
        this.welcomingsAvailables = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
