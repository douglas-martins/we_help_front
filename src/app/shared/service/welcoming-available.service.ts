import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {WelcomingAvailableMock} from '../mock/welcoming-available.mock';
import {WelcomingAvailableModel} from '../model/welcoming-available.model';
import {BaseService} from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomingAvailableService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new WelcomingAvailableMock());
  }

  create(welcomingAvailable: WelcomingAvailableModel): Observable<WelcomingAvailableModel> {
    const copy = this.convert(welcomingAvailable);
    return this.http.post<WelcomingAvailableModel>(this.url + 'welcoming-available', copy, {observe: 'response'});
  }

  update(welcomingAvailable: WelcomingAvailableModel): Observable<WelcomingAvailableModel> {
    const copy = this.convert(welcomingAvailable);
    return this.http.patch<WelcomingAvailableModel>(this.url + '/welcoming-available/' + welcomingAvailable.id, copy,
      {observe: 'response'});
  }

  find(id: number): Observable<WelcomingAvailableModel> {
    return this.http.get<WelcomingAvailableModel>(this.url + '/welcoming-available/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<WelcomingAvailableModel[]> {
    return this.http.getAll<WelcomingAvailableModel>(this.url + '/welcomings-availables', {observe: 'response'});
  }

  delete(id: number): Observable<WelcomingAvailableModel> {
    return this.http.delete<WelcomingAvailableModel>(this.url + '/welcoming-available/' + id, {observe: 'response'}, id);
  }
}
