import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingAvailableListComponent } from './welcoming-available-list.component';

describe('WelcomingAvailableListComponent', () => {
  let component: WelcomingAvailableListComponent;
  let fixture: ComponentFixture<WelcomingAvailableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomingAvailableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomingAvailableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
