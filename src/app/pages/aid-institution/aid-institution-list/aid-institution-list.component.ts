import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../menu-item';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {Router} from '@angular/router';
import {AidInstitutionService} from '../../../shared/service/aid-institution.service';
import {AidInstitutionModel} from '../../../shared/model/aid-institution.model';

@Component({
  selector: 'app-aid-institution-list',
  templateUrl: './aid-institution-list.component.html',
  styleUrls: ['./aid-institution-list.component.sass']
})
export class AidInstitutionListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  aidsInstitutions: Array<AidInstitutionModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: AidInstitutionService,
    private router: Router
  ) {
    super(BaseMenuTypes.AID_INSTITUTION);
    this.service.findAll().subscribe((data) => {
      this.aidsInstitutions = data;
      this.keys = (typeof this.aidsInstitutions[0] !== 'undefined' ? Object.keys(this.aidsInstitutions[0]) : new Array<string>());
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
        this.aidsInstitutions = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
