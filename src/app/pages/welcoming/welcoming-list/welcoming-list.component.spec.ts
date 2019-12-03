import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingListComponent } from './welcoming-list.component';

describe('WelcomingListComponent', () => {
  let component: WelcomingListComponent;
  let fixture: ComponentFixture<WelcomingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
