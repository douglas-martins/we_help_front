import { Component, OnInit } from '@angular/core';
import {AidInstitutionService} from '../../../shared/service/aid-institution.service';
import {Router} from '@angular/router';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {WelcomingModel} from '../../../shared/model/welcoming.model';
import {MenuItem} from '../../menu-item';
import {WelcomingService} from '../../../shared/service/welcoming.service';

@Component({
  selector: 'app-welcoming-list',
  templateUrl: './welcoming-list.component.html',
  styleUrls: ['./welcoming-list.component.sass']
})
export class WelcomingListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  welcomings: Array<WelcomingModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: WelcomingService,
    private router: Router
  ) {
    super(BaseMenuTypes.WELCOMING);
    this.service.findAll().subscribe((data) => {
      this.welcomings = data;
      this.keys = (typeof this.welcomings[0] !== 'undefined' ? Object.keys(this.welcomings[0]) : new Array<string>());
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
        this.welcomings = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }}
