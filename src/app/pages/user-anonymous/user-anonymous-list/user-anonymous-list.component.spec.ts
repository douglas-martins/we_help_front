import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnonymousListComponent } from './user-anonymous-list.component';

describe('UserAnonymousListComponent', () => {
  let component: UserAnonymousListComponent;
  let fixture: ComponentFixture<UserAnonymousListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnonymousListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnonymousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
