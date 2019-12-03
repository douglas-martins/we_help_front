import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AidInstitutionListComponent } from './aid-institution/aid-institution-list/aid-institution-list.component';
import { ChatHistoryListComponent } from './chat-history/chat-history-list/chat-history-list.component';
import { ChatHistoryMediaListComponent } from './chat-history-media/chat-history-media-list/chat-history-media-list.component';
import { ChatRoomListComponent } from './chat-room/chat-room-list/chat-room-list.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { FileListComponent } from './file/file-list/file-list.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { UserAnonymousListComponent } from './user-anonymous/user-anonymous-list/user-anonymous-list.component';
import { WelcomingListComponent } from './welcoming/welcoming-list/welcoming-list.component';
import { WelcomingAvailableListComponent } from './welcoming-available/welcoming-available-list/welcoming-available-list.component';
import {FormsModule} from '@angular/forms';
import {AidInstitutionComponent} from './aid-institution/aid-institution.component';
import {ChatHistoryComponent} from './chat-history/chat-history.component';
import {ChatHistoryMediaComponent} from './chat-history-media/chat-history-media.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {ContactComponent} from './contact/contact.component';
import {FileComponent} from './file/file.component';
import {PersonComponent} from './person/person.component';
import {UserAnonymousComponent} from './user-anonymous/user-anonymous.component';
import {WelcomingComponent} from './welcoming/welcoming.component';
import {WelcomingAvailableComponent} from './welcoming-available/welcoming-available.component';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';



@NgModule({
  declarations: [
    AidInstitutionComponent,
    ChatHistoryComponent,
    ChatHistoryMediaComponent,
    ChatRoomComponent,
    ContactComponent,
    FileComponent,
    PersonComponent,
    UserAnonymousComponent,
    WelcomingComponent,
    WelcomingAvailableComponent,
    AidInstitutionListComponent,
    ChatHistoryListComponent,
    ChatHistoryMediaListComponent,
    ChatRoomListComponent,
    ContactListComponent,
    FileListComponent,
    PersonListComponent,
    UserAnonymousListComponent,
    WelcomingListComponent,
    WelcomingAvailableListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LayoutModule
  ],
  exports: [
    AidInstitutionComponent,
    ChatHistoryComponent,
    ChatHistoryMediaComponent,
    ChatRoomComponent,
    ContactComponent,
    FileComponent,
    PersonComponent,
    UserAnonymousComponent,
    WelcomingComponent,
    WelcomingAvailableComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
