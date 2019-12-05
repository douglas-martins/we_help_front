import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {BaseService} from '../base/base.service';
import {ContactMock} from '../mock/contact.mock';
import {ContactModel} from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new ContactMock());
  }

  create(contact: ContactModel): Observable<ContactModel> {
    const copy = this.convert(contact);
    return this.http.post<ContactModel>(this.url + '/contact', copy, {observe: 'response'});
  }

  update(contact: ContactModel): Observable<ContactModel> {
    const copy = this.convert(contact);
    return this.http.patch<ContactModel>(this.url + '/contact/' + contact.id, copy, {observe: 'response'});
  }

  find(id: number): Observable<ContactModel> {
    return this.http.get<ContactModel>(this.url + '/contact/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<ContactModel[]> {
    return this.http.getAll<ContactModel>(this.url + '/contacts', {observe: 'response'});
  }

  delete(id: number): Observable<ContactModel> {
    return this.http.delete<ContactModel>(this.url + '/contact/' + id, {observe: 'response'}, id);
  }
}
