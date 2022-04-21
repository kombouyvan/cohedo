import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualBoxComponent } from './aktual-box.component';

describe('DonationBoxComponent', () => {
  let component: AktualBoxComponent;
  let fixture: ComponentFixture<AktualBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktualBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
