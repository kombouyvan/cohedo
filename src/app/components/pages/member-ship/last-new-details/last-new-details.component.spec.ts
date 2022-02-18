import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewDetailsComponent } from './last-new-details.component';

describe('BlogDetailsComponent', () => {
  let component: LastNewDetailsComponent;
  let fixture: ComponentFixture<LastNewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
