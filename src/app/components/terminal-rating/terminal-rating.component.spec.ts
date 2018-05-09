import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalRatingComponent } from './terminal-rating.component';

describe('TerminalRatingComponent', () => {
  let component: TerminalRatingComponent;
  let fixture: ComponentFixture<TerminalRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
