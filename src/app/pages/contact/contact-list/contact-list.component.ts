import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {MenuItem} from '../../menu-item';
import {ContactModel} from '../../../shared/model/contact.model';
import {ContactService} from '../../../shared/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  contacts: Array<ContactModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: ContactService,
    private router: Router
  ) {
    super(BaseMenuTypes.CONTACT);
    this.service.findAll().subscribe((data) => {
      this.contacts = data;
      this.keys = (typeof this.contacts[0] !== 'undefined' ? Object.keys(this.contacts[0]) : new Array<string>());
    });
  }

  ngOnInit() {
  }

  /**
   * Remove a element from the base.
   * @param id: number with value of id for the object that will be deleted.
   */
  remove(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.service.findAll().subscribe((data) => {
        this.contacts = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }
}
