import { Injectable } from '@angular/core';
import {BaseService} from '../base/base.service';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {PersonMock} from '../mock/person.mock';
import {PersonModel} from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService {
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
    this.setMock(new PersonMock());
  }

  create(person: PersonModel): Observable<PersonModel> {
    const copy = this.convert(person);
    return this.http.post<PersonModel>(this.url, copy, {observe: 'response'});
  }

  update(person: PersonModel): Observable<PersonModel> {
    const copy = this.convert(person);
    return this.http.patch<PersonModel>(`${this.url}/${person.id}`, copy, {observe: 'response'});
  }

  find(id: number): Observable<PersonModel> {
    return this.http.get<PersonModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }

  findAll(): Observable<PersonModel[]> {
    return this.http.getAll<PersonModel>(this.url, {observe: 'response'});
  }

  delete(id: number): Observable<PersonModel> {
    return this.http.delete<PersonModel>(`${this.url}/${id}`, {observe: 'response'}, id);
  }
}
