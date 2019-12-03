import { TestBed } from '@angular/core/testing';

import { AidInstitutionService } from './aid-institution.service';

describe('AidInstitutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AidInstitutionService = TestBed.get(AidInstitutionService);
    expect(service).toBeTruthy();
  });
});
