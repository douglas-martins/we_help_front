import { TestBed } from '@angular/core/testing';

import { UserAnonymousService } from './user-anonymous.service';

describe('UserAnonymousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAnonymousService = TestBed.get(UserAnonymousService);
    expect(service).toBeTruthy();
  });
});
