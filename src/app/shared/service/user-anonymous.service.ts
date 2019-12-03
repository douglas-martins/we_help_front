import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {BaseService} from '../base/base.service';
import {UserAnonymousMock} from '../mock/user-anonymous.mock';
import {UserAnonymousModel} from '../model/user-anonymous.model';

@Injectable({
  providedIn: 'root'
})
export class UserAnonymousService extends BaseService {
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
    this.setMock(new UserAnonymousMock());
  }

  create(userAnonymous: UserAnonymousModel): Observable<UserAnonymousModel> {
    const copy = this.convert(userAnonymous);
    return this.http.post<UserAnonymousModel>(this.url, copy, {observe: 'response'});
  }

  update(userAnonymous: UserAnonymousModel): Observable<UserAnonymousModel> {
    const copy = this.convert(userAnonymous);
    return this.http.patch<UserAnonymousModel>(`${this.url}/${userAnonymous.id}`, copy, {observe: 'response'});
  }

  find(id: number): Observable<UserAnonymousModel> {
    return this.http.get<UserAnonymousModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }

  findAll(): Observable<UserAnonymousModel[]> {
    return this.http.getAll<UserAnonymousModel>(this.url, {observe: 'response'});
  }

  delete(id: number): Observable<UserAnonymousModel> {
    return this.http.delete<UserAnonymousModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }
}
