import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsInternationalComponent } from './projects-international.component';

const routes: Routes = [{ path: '', component: ProjectsInternationalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsInternationalRoutingModule { }
