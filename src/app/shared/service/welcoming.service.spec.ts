import { TestBed } from '@angular/core/testing';

import { WelcomingService } from './welcoming.service';

describe('WelcomingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomingService = TestBed.get(WelcomingService);
    expect(service).toBeTruthy();
  });
});
