import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousBoxComponent } from './various-box.component';

describe('DonationBoxComponent', () => {
  let component: VariousBoxComponent;
  let fixture: ComponentFixture<VariousBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariousBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
