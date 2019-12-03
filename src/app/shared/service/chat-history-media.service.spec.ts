import { TestBed } from '@angular/core/testing';

import { ChatHistoryMediaService } from './chat-history-media.service';

describe('ChatHistoryMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatHistoryMediaService = TestBed.get(ChatHistoryMediaService);
    expect(service).toBeTruthy();
  });
});
