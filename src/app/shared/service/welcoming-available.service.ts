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
    this.setMock(new WelcomingAvailableMock());
  }

  create(welcomingAvailable: WelcomingAvailableModel): Observable<WelcomingAvailableModel> {
    const copy = this.convert(welcomingAvailable);
    return this.http.post<WelcomingAvailableModel>(this.url, copy, {observe: 'response'});
  }

  update(welcomingAvailable: WelcomingAvailableModel): Observable<WelcomingAvailableModel> {
    const copy = this.convert(welcomingAvailable);
    return this.http.patch<WelcomingAvailableModel>(`${this.url}/${welcomingAvailable.id}`, copy, {observe: 'response'});
  }

  find(id: number): Observable<WelcomingAvailableModel> {
    return this.http.get<WelcomingAvailableModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }

  findAll(): Observable<WelcomingAvailableModel[]> {
    return this.http.getAll<WelcomingAvailableModel>(this.url, {observe: 'response'});
  }

  delete(id: number): Observable<WelcomingAvailableModel> {
    return this.http.delete<WelcomingAvailableModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }
}
