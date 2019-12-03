import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidInstitutionComponent } from './aid-institution.component';

describe('AidInstitutionComponent', () => {
  let component: AidInstitutionComponent;
  let fixture: ComponentFixture<AidInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
