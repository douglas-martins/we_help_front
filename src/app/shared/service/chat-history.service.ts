import { Injectable } from '@angular/core';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {ChatHistoryMock} from '../mock/chat-history.mock';
import {ChatHistoryModel} from '../model/chat-history.model';
import {BaseService} from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ChatHistoryService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new ChatHistoryMock());
  }

  create(chatHistory: ChatHistoryModel): Observable<ChatHistoryModel> {
    const copy = this.convert(chatHistory);
    return this.http.post<ChatHistoryModel>(this.url + '/chat-history', copy, {observe: 'response'});
  }

  update(chatHistory: ChatHistoryModel): Observable<ChatHistoryModel> {
    const copy = this.convert(chatHistory);
    return this.http.patch<ChatHistoryModel>(this.url + '/chat-history/' + chatHistory.id, copy, {observe: 'response'});
  }

  find(id: number): Observable<ChatHistoryModel> {
    return this.http.get<ChatHistoryModel>(this.url + '/chat-history/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<ChatHistoryModel[]> {
    return this.http.getAll<ChatHistoryModel>(this.url + '/chats-history', {observe: 'response'});
  }

  delete(id: number): Observable<ChatHistoryModel> {
    return this.http.delete<ChatHistoryModel>(this.url + '/chat-history/' + id, {observe: 'response'}, id);
  }
}
