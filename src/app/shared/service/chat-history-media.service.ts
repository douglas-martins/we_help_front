import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {BaseService} from '../base/base.service';
import {ChatHistoryMediaMock} from '../mock/chat-history-media.mock';
import {ChatHistoryMediaModel} from '../model/chat-history-media.model';

@Injectable({
  providedIn: 'root'
})
export class ChatHistoryMediaService extends BaseService {
  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new ChatHistoryMediaMock());
  }

  create(chatHistoryMedia: ChatHistoryMediaModel): Observable<ChatHistoryMediaModel> {
    const copy = this.convert(chatHistoryMedia);
    return this.http.post<ChatHistoryMediaModel>(this.url + '/chat-history-media', copy, {observe: 'response'});
  }

  update(chatHistoryMedia: ChatHistoryMediaModel): Observable<ChatHistoryMediaModel> {
    const copy = this.convert(chatHistoryMedia);
    return this.http.patch<ChatHistoryMediaModel>(this.url + '/chat-history-media/' + chatHistoryMedia.id, copy, {observe: 'response'});
  }

  find(id: number): Observable<ChatHistoryMediaModel> {
    return this.http.get<ChatHistoryMediaModel>(this.url + '/chat-history-media/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<ChatHistoryMediaModel[]> {
    return this.http.getAll<ChatHistoryMediaModel>(this.url + '/chats-history-medias', {observe: 'response'});
  }

  delete(id: number): Observable<ChatHistoryMediaModel> {
    return this.http.delete<ChatHistoryMediaModel>(this.url + '/chat-history-media/' + id, {observe: 'response'}, id);
  }
}
