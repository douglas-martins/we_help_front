import {WelcomingAvailableModel} from './welcoming-available.model';
import {UserAnonymousModel} from './user-anonymous.model';
import {ChatHistoryModel} from './chat-history.model';

export class ChatRoomModel {
  constructor(
    public id?: number,
    public welcomingAvailable?: WelcomingAvailableModel,
    public userAnonymous?: UserAnonymousModel,
    public chatHistory?: ChatHistoryModel,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
