import { Injectable } from '@angular/core';
import {BaseService} from '../base/base.service';
import {BaseHttp} from '../base/base-http';
import {AidInstitutionMock} from '../mock/aid-institution.mock';
import {Observable} from 'rxjs';
import {AidInstitutionModel} from '../model/aid-institution.model';

@Injectable({
  providedIn: 'root'
})
export class AidInstitutionService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new AidInstitutionMock());
  }

  create(aidInstitution: AidInstitutionModel): Observable<AidInstitutionModel> {
    const copy = this.convert(aidInstitution);
    return this.http.post<AidInstitutionModel>(this.url + '/aid-institution', copy, {observe: 'response'});
  }

  update(aidInstitution: AidInstitutionModel): Observable<AidInstitutionModel> {
    const copy = this.convert(aidInstitution);
    return this.http.patch<AidInstitutionModel>(this.url + '/aid-institution/' + aidInstitution.id, copy, {observe: 'response'});
  }

  find(id: number): Observable<AidInstitutionModel> {
    return this.http.get<AidInstitutionModel>(this.url + '/aid-institution/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<AidInstitutionModel[]> {
    return this.http.getAll<AidInstitutionModel>(this.url + '/aid-institutions', {observe: 'response'});
  }

  delete(id: number): Observable<AidInstitutionModel> {
    return this.http.delete<AidInstitutionModel>(this.url + '/aid-institution/' + id, {observe: 'response'}, id);
  }
}
