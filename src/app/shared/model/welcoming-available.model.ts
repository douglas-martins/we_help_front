import {WelcomingModel} from './welcoming.model';

export class WelcomingAvailableModel {
  constructor(
    public id?: number,
    public welcoming?: WelcomingModel,
    public onChat?: boolean,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
