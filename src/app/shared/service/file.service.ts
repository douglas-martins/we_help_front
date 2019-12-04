import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {FileMock} from '../mock/file.mock';
import {FileModel} from '../model/file.model';
import {BaseService} from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new FileMock());
  }

  create(file: FileModel): Observable<FileModel> {
    const copy = this.convert(file);
    return this.http.post<FileModel>(this.url + '/file', copy, {observe: 'response'});
  }

  update(file: FileModel): Observable<FileModel> {
    const copy = this.convert(file);
    return this.http.patch<FileModel>(this.url + '/file/' + file.id , copy, {observe: 'response'});
  }

  find(id: number): Observable<FileModel> {
    return this.http.get<FileModel>(this.url + '/file/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<FileModel[]> {
    return this.http.getAll<FileModel>(this.url + '/files', {observe: 'response'});
  }

  delete(id: number): Observable<FileModel> {
    return this.http.delete<FileModel>(this.url + '/file/' + id, {observe: 'response'}, id);
  }
}
