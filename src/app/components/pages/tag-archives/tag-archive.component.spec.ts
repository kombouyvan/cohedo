import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagArchiveComponent } from './tag-archive.component';

describe('StoryDetailsComponent', () => {
  let component: TagArchiveComponent;
  let fixture: ComponentFixture<TagArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
