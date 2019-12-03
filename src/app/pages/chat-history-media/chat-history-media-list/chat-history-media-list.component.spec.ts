import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHistoryMediaListComponent } from './chat-history-media-list.component';

describe('ChatHistoryMediaListComponent', () => {
  let component: ChatHistoryMediaListComponent;
  let fixture: ComponentFixture<ChatHistoryMediaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHistoryMediaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHistoryMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
