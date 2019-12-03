import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHistoryMediaComponent } from './chat-history-media.component';

describe('ChatHistoryMediaComponent', () => {
  let component: ChatHistoryMediaComponent;
  let fixture: ComponentFixture<ChatHistoryMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHistoryMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHistoryMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
