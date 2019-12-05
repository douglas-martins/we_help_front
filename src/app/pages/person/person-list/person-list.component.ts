import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../menu-item';
import {Router} from '@angular/router';
import {PersonService} from '../../../shared/service/person.service';
import {BaseMenuTypes} from '../../../shared/base/base-menu';
import {PersonModel} from '../../../shared/model/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass']
})
export class PersonListComponent extends MenuItem implements OnInit {
  /**
   * Array with the items of component list.
   */
  persons: Array<PersonModel>;

  /** Keys for label the table **/
  keys: Array<string>;

  constructor(
    private service: PersonService,
    private router: Router
  ) {
    super(BaseMenuTypes.PERSON);
    this.service.findAll().subscribe((data) => {
      this.persons = data;
      this.keys = (typeof this.persons[0] !== 'undefined' ? Object.keys(this.persons[0]) : new Array<string>());
    });
  }

  ngOnInit(): void {
  }

  /**
   * Remove a element from the base.
   * @param id: number with value of id for the object that will be deleted.
   */
  remove(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.service.findAll().subscribe((data) => {
        this.persons = data;
      });
    });
  }

  save(): void {
    throw new Error('Method not implemented.');
  }

}
