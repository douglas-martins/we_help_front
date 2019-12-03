/**
 * A base class for mock some models on this system.
 */
export class BaseMock {
  private itemsMock: Array<any>;

  /**
   * Default class constructor.
   */
  constructor() {
    this.itemsMock = new Array<any>();
  }

  /**
   * Generate a UID for the mock.
   */
  private generateId(): number {
    let aux: number = 0;
    this.itemsMock.forEach((item) => {
      if (item.id > aux) {
        aux = item.id;
      }
    });

    return aux + 1;
  }

  /**
   * Set item mock on the array.
   * @param mock: any with the value for the mock that will be inserted.
   */
  setItemMock(mock: any): void {
    this.itemsMock.push(mock);
  }

  /**
   * Get all mocks on the array.
   * @return: Array<any>
   */
  getItemsMock(): Array<any> {
    return this.itemsMock;
  }

  /**
   * Insert item on the mocks array.
   * @param item: any with the value that will be inserted.
   * @return: Object with the value of object that was insted.
   */
  insertItem(item: any): any {
    item.id = this.generateId();
    this.itemsMock.push(item);
    return Object.assign({}, item);
  }

  /**
   * Update a mock item on the array.
   * @param item: any with the item value that will change.
   * @return: Object with the item that was updated.
   */
  updateItem(item: any): any {
    this.itemsMock.forEach((p, index) => {
      if (p.id === item.id) {
        this.itemsMock[index] = item;
      }
    });

    return Object.assign({}, item);
  }

  /**
   * Find the mock by the id generated for him.
   * @param id: number with the id for the mock.
   * @return: any with the reference for the item.
   */
  findById(id: number): any {
    const item = this.itemsMock.find((res) => res.id === id);
    console.log(item);
    return Object.assign({}, item);
  }

  /**
   * Delete a item on the mocks array,
   * @param item: any with the value of the item that will be deleted.
   * @return: any with the value of the object that was deleted.
   */
  delete(item: any): any {
    let aux = null;
    let pos = -1;

    this.itemsMock.forEach((p, index) => {
      if (p.id === item) {
        aux = this.itemsMock[index];
        pos = index;
      }
    });

    if (pos > -1) {
      this.itemsMock.splice(pos, 1);
    }

    return Object.assign({}, item);
  }
}
