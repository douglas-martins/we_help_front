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

  private url: string;

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    this.url = 'http://http://127.0.0.1:5000/';
    this.setMock(new AidInstitutionMock());
  }

  create(aidInstitution: AidInstitutionModel): Observable<AidInstitutionModel> {
    const copy = this.convert(aidInstitution);
    return this.http.post<AidInstitutionModel>(this.url, copy, {observe: 'response'});
  }

  update(aidInstitution: AidInstitutionModel): Observable<AidInstitutionModel> {
    const copy = this.convert(aidInstitution);
    return this.http.patch<AidInstitutionModel>(`${this.url}/${aidInstitution.id}`, copy, {observe: 'response'});
  }

  find(id: number): Observable<AidInstitutionModel> {
    return this.http.get<AidInstitutionModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }

  findAll(): Observable<AidInstitutionModel[]> {
    return this.http.getAll<AidInstitutionModel>(this.url, {observe: 'response'});
  }

  delete(id: number): Observable<AidInstitutionModel> {
    return this.http.delete<AidInstitutionModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }
}
