import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnonymousComponent } from './user-anonymous.component';

describe('UserAnonymousComponent', () => {
  let component: UserAnonymousComponent;
  let fixture: ComponentFixture<UserAnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
