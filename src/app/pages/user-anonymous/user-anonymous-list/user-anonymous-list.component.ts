import { Component, OnInit } from '@angular/core';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {MenuItem} from '../../menu-item';
import {UserAnonymousService} from '../../../shared/service/user-anonymous.service';
import {Router} from '@angular/router';
import {UserAnonymousModel} from '../../../shared/model/user-anonymous.model';

@Component({
  selector: 'app-user-anonymous-list',
  templateUrl: './user-anonymous-list.component.html',
  styleUrls: ['./user-anonymous-list.component.sass']
})
export class UserAnonymousListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  usersAnonymous: Array<UserAnonymousModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  /**
   * Default class constructor.
   * @param service:
   * @param router:
   */
  constructor(
    private service: UserAnonymousService,
    private router: Router
  ) {
    super(BaseMenuTypes.USER_ANONYMOUS);
    this.service.findAll().subscribe((data) => {
      this.usersAnonymous = data;
      this.keys = (typeof this.usersAnonymous[0] !== 'undefined' ? Object.keys(this.usersAnonymous[0]) : new Array<string>());
    });
  }

  ngOnInit(): void {
  }

  /**
   * Remove a element from the base.
   * @param id: number with value of id for the object that will be deleted.
   */
  remove(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.service.findAll().subscribe((data) => {
        this.usersAnonymous = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
