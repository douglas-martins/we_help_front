export class ContactModel {
  constructor(
    public id?: number,
    public telephone?: number,
    public email?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
