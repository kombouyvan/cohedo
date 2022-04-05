import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInternationalComponent } from './projects-international.component';

describe('BlogRightComponent', () => {
  let component: ProjectsInternationalComponent;
  let fixture: ComponentFixture<ProjectsInternationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsInternationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
