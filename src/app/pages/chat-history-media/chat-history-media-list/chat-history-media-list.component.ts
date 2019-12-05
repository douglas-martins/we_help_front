import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {ChatHistoryMediaService} from '../../../shared/service/chat-history-media.service';
import {ChatHistoryMediaModel} from '../../../shared/model/chat-history-media.model';
import {MenuItem} from '../../menu-item';

@Component({
  selector: 'app-chat-history-media-list',
  templateUrl: './chat-history-media-list.component.html',
  styleUrls: ['./chat-history-media-list.component.sass']
})
export class ChatHistoryMediaListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  chatsHistoryMedias: Array<ChatHistoryMediaModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: ChatHistoryMediaService,
    private router: Router
  ) {
    super(BaseMenuTypes.CHAT_HISTORY_MEDIA);
    this.service.findAll().subscribe((data) => {
      this.chatsHistoryMedias = data;
      this.keys = (typeof this.chatsHistoryMedias[0] !== 'undefined' ? Object.keys(this.chatsHistoryMedias[0]) : new Array<string>());
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
        this.chatsHistoryMedias = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
