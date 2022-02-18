import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasNewsContentComponent } from './las-news-content.component';

describe('ContentComponent', () => {
  let component: LasNewsContentComponent;
  let fixture: ComponentFixture<LasNewsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasNewsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
