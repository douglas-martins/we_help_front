import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingAvailableComponent } from './welcoming-available.component';

describe('WelcomingAvailableComponent', () => {
  let component: WelcomingAvailableComponent;
  let fixture: ComponentFixture<WelcomingAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomingAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomingAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
