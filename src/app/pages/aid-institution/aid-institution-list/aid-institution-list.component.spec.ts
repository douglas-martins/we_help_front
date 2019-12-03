import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidInstitutionListComponent } from './aid-institution-list.component';

describe('AidInstitutionListComponent', () => {
  let component: AidInstitutionListComponent;
  let fixture: ComponentFixture<AidInstitutionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidInstitutionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidInstitutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
