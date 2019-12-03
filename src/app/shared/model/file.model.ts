export class FileModel {
  constructor(
    public id?: number,
    public url?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}
}
