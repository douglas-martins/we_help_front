import { Injectable } from '@angular/core';
import {BaseHttp} from './base-http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private mock;
  protected url: string;

  /**
   * Default class constructor.
   * @param http:
   */
  constructor(
    public http: BaseHttp,
  ) {
    this.url = 'http://127.0.0.1:5000';
    this.mock = null;
  }

  /**
   * Set mock value.
   * @param value: any with the value that will be inserted on the mock.
   */
  setMock(value: any): void {
    this.mock = value;
    this.http.setMock(this.mock);
  }

  /**
   * Get the mock value.
   * @return: any with the value of the mock.
   */
  getMock(): any {
    return this.mock;
  }

  /**
   * Convert a model to a JSON which can be sent to the server.
   */
  protected convert(value: any): any {
    return Object.assign({}, value);
  }
}
