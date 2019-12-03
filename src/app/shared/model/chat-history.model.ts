import {WelcomingModel} from './welcoming.model';
import {UserAnonymousModel} from './user-anonymous.model';

export class ChatHistoryModel {
  constructor(
    public id?: number,
    public welcoming?: WelcomingModel,
    public userAnonymous?: UserAnonymousModel,
    public message?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
