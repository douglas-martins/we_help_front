import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {FileComponent} from './pages/file/file.component';
import {UserAnonymousComponent} from './pages/user-anonymous/user-anonymous.component';
import {AidInstitutionComponent} from './pages/aid-institution/aid-institution.component';
import {PersonComponent} from './pages/person/person.component';
import {WelcomingComponent} from './pages/welcoming/welcoming.component';
import {WelcomingAvailableComponent} from './pages/welcoming-available/welcoming-available.component';
import {ChatRoomComponent} from './pages/chat-room/chat-room.component';
import {ChatHistoryComponent} from './pages/chat-history/chat-history.component';
import {ChatHistoryMediaComponent} from './pages/chat-history-media/chat-history-media.component';
import {AidInstitutionListComponent} from './pages/aid-institution/aid-institution-list/aid-institution-list.component';
import {ChatHistoryListComponent} from './pages/chat-history/chat-history-list/chat-history-list.component';
import {ChatHistoryMediaListComponent} from './pages/chat-history-media/chat-history-media-list/chat-history-media-list.component';
import {ChatRoomListComponent} from './pages/chat-room/chat-room-list/chat-room-list.component';
import {ContactListComponent} from './pages/contact/contact-list/contact-list.component';
import {ContactComponent} from './pages/contact/contact.component';
import {FileListComponent} from './pages/file/file-list/file-list.component';
import {PersonListComponent} from './pages/person/person-list/person-list.component';
import {UserAnonymousListComponent} from './pages/user-anonymous/user-anonymous-list/user-anonymous-list.component';
import {WelcomingListComponent} from './pages/welcoming/welcoming-list/welcoming-list.component';
import {WelcomingAvailableListComponent} from './pages/welcoming-available/welcoming-available-list/welcoming-available-list.component';


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'file', component: FileComponent},
  {path: 'file/:id', component: FileComponent},
  {path: 'files', component: FileListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'user-anonymous', component: UserAnonymousComponent},
  {path: 'user-anonymous/:id', component: UserAnonymousComponent},
  {path: 'users-anonymous', component: UserAnonymousListComponent},
  {path: 'aid-institution', component: AidInstitutionComponent},
  {path: 'aid-institution/:id', component: AidInstitutionComponent},
  {path: 'aid-institutions', component: AidInstitutionListComponent},
  {path: 'person', component: PersonComponent},
  {path: 'person/:id', component: PersonComponent},
  {path: 'persons', component: PersonListComponent},
  {path: 'welcoming', component: WelcomingComponent},
  {path: 'welcoming/:id', component: WelcomingComponent},
  {path: 'welcomings', component: WelcomingListComponent},
  {path: 'welcoming-available', component: WelcomingAvailableComponent},
  {path: 'welcoming-available/:id', component: WelcomingAvailableComponent},
  {path: 'welcomings-availables', component: WelcomingAvailableListComponent},
  {path: 'chat-room', component: ChatRoomComponent},
  {path: 'chat-room/:id', component: ChatRoomComponent},
  {path: 'chat-rooms', component: ChatRoomListComponent},
  {path: 'chat-history', component: ChatHistoryComponent},
  {path: 'chat-history/:id', component: ChatHistoryComponent},
  {path: 'chat-histories', component: ChatHistoryListComponent},
  {path: 'chat-history-media', component: ChatHistoryMediaComponent},
  {path: 'chat-history-media/:id', component: ChatHistoryMediaComponent},
  {path: 'chat-histories-medias', component: ChatHistoryMediaListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
