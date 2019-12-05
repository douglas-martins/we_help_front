import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {MenuItem} from '../../menu-item';
import {ChatRoomModel} from '../../../shared/model/chat-room.model';
import {ChatRoomService} from '../../../shared/service/chat-room.service';

@Component({
  selector: 'app-chat-room-list',
  templateUrl: './chat-room-list.component.html',
  styleUrls: ['./chat-room-list.component.sass']
})
export class ChatRoomListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  chatsRooms: Array<ChatRoomModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: ChatRoomService,
    private router: Router
  ) {
    super(BaseMenuTypes.CHAT_ROOM);
    this.service.findAll().subscribe((data) => {
      this.chatsRooms = data;
      this.keys = (typeof this.chatsRooms[0] !== 'undefined' ? Object.keys(this.chatsRooms[0]) : new Array<string>());
    });
  }

  ngOnInit() {
  }

  /**
   * Remove a element from the base.
   * @param id: number with value of id for the object that will be deleted.
   */
  remove(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.service.findAll().subscribe((data) => {
        this.chatsRooms = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
