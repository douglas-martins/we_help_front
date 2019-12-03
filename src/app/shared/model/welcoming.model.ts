import {PersonModel} from './person.model';

export class WelcomingModel {
  constructor(
    public id?: number,
    public person?: PersonModel,
    public password?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
