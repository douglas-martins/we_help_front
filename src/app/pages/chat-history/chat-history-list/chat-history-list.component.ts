import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {ChatHistoryModel} from '../../../shared/model/chat-history.model';
import {MenuItem} from '../../menu-item';
import {ChatHistoryService} from '../../../shared/service/chat-history.service';

@Component({
  selector: 'app-chat-history-list',
  templateUrl: './chat-history-list.component.html',
  styleUrls: ['./chat-history-list.component.sass']
})
export class ChatHistoryListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  chatsHistory: Array<ChatHistoryModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: ChatHistoryService,
    private router: Router
  ) {
    super(BaseMenuTypes.AID_INSTITUTION);
    this.service.findAll().subscribe((data) => {
      this.chatsHistory = data;
      this.keys = (typeof this.chatsHistory[0] !== 'undefined' ? Object.keys(this.chatsHistory[0]) : new Array<string>());
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
        this.chatsHistory = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
