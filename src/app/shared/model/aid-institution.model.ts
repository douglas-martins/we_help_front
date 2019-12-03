import {ContactModel} from './contact.model';
import {FileModel} from './file.model';

export class AidInstitutionModel {
  constructor(
    public id?: number,
    public contact?: ContactModel,
    public file?: FileModel,
    public urlSite?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
