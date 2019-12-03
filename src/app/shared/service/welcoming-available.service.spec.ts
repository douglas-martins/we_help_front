import { TestBed } from '@angular/core/testing';

import { WelcomingAvailableService } from './welcoming-available.service';

describe('WelcomingAvailableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomingAvailableService = TestBed.get(WelcomingAvailableService);
    expect(service).toBeTruthy();
  });
});
