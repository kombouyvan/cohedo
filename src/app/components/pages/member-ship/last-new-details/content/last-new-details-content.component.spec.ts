import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewDetailsContentComponent } from './last-new-details-content.component';

describe('ContentComponent', () => {
  let component: LastNewDetailsContentComponent;
  let fixture: ComponentFixture<LastNewDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNewDetailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
