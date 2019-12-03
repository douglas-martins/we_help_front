import {ChatHistoryModel} from './chat-history.model';
import {FileModel} from './file.model';

export class ChatHistoryMediaModel {
  constructor(
    public id?: number,
    public chatHistory?: ChatHistoryModel,
    public file?: FileModel,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
