import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {WelcomingMock} from '../mock/welcoming.mock';
import {BaseService} from '../base/base.service';
import {WelcomingModel} from '../model/welcoming.model';

@Injectable({
  providedIn: 'root'
})
export class WelcomingService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new WelcomingMock());
  }

  create(welcoming: WelcomingModel): Observable<WelcomingModel> {
    const copy = this.convert(welcoming);
    return this.http.post<WelcomingModel>(this.url + '/welcoming', copy, {observe: 'response'});
  }

  update(welcoming: WelcomingModel): Observable<WelcomingModel> {
    const copy = this.convert(welcoming);
    return this.http.patch<WelcomingModel>(this.url + '/welcoming/' + welcoming.id, copy, {observe: 'response'});
  }

  find(id: number): Observable<WelcomingModel> {
    return this.http.get<WelcomingModel>(this.url + '/welcoming/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<WelcomingModel[]> {
    return this.http.getAll<WelcomingModel>(this.url + '/welcomings', {observe: 'response'});
  }

  delete(id: number): Observable<WelcomingModel> {
    return this.http.delete<WelcomingModel>(this.url + '/welcoming/' + id, {observe: 'response'}, id);
  }
}
