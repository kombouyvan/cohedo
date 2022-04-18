import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLocalDetailsComponent } from './project-local-details.component';

describe('BlogRightComponent', () => {
  let component: ProjectLocalDetailsComponent;
  let fixture: ComponentFixture<ProjectLocalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLocalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLocalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
