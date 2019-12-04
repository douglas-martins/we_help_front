import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../menu-item';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {AidInstitutionModel} from '../../shared/model/aid-institution.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AidInstitutionService} from '../../shared/service/aid-institution.service';

@Component({
  selector: 'app-aid-institution',
  templateUrl: './aid-institution.component.html',
  styleUrls: ['./aid-institution.component.sass']
})
export class AidInstitutionComponent extends MenuItem implements OnInit {
  /** Aid Institution model object **/
  aidInstitution: AidInstitutionModel;

  /**
   * Default class constructor.
   * @param route
   * @param router
   * @param service
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AidInstitutionService
  ) {
    super(BaseMenuTypes.AID_INSTITUTION);
    this.aidInstitution = new AidInstitutionModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.aidInstitution = data;
      });
    }
  }

  ngOnInit() {
  }

  /**
   * Persist the model on the request.
   */
  save(): void {
    if (this.aidInstitution.id) {
      this.service.update(this.aidInstitution).subscribe(() => {
        this.router.navigate(['aid-institution']);
      });
    } else {
      this.service.create(this.aidInstitution).subscribe(() => {
        this.router.navigate(['/aid-institutions']);
      });
    }
  }
}
