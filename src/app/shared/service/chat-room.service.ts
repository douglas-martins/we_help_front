import { Injectable } from '@angular/core';
import {BaseService} from '../base/base.service';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';
import {ChatRoomMock} from '../mock/chat-room.mock';
import {ChatRoomModel} from '../model/chat-room.model';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService extends BaseService {

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp
  ) {
    super(http);
    // this.setMock(new ChatRoomMock());
  }

  create(chatRoom: ChatRoomModel): Observable<ChatRoomModel> {
    const copy = this.convert(chatRoom);
    return this.http.post<ChatRoomModel>(this.url + '/chat-room', copy, {observe: 'response'});
  }

  update(chatRoom: ChatRoomModel): Observable<ChatRoomModel> {
    const copy = this.convert(chatRoom);
    return this.http.patch<ChatRoomModel>(this.url + '/chat-room/' + chatRoom.id, copy, {observe: 'response'});
  }

  find(id: number): Observable<ChatRoomModel> {
    return this.http.get<ChatRoomModel>(this.url + '/chat-room/' + id, {observe: 'response'}, id);
  }

  findAll(): Observable<ChatRoomModel[]> {
    return this.http.getAll<ChatRoomModel>(this.url + '/chats-rooms/', {observe: 'response'});
  }

  delete(id: number): Observable<ChatRoomModel> {
    return this.http.delete<ChatRoomModel>(this.url + '/chat-room/' + id, {observe: 'response'}, id);
  }
}
