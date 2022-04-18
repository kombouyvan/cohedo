import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLocalDetailsComponent } from './project-local-details.component';

const routes: Routes = [{ path: '', component: ProjectLocalDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectLocalDetailsRoutingModule { }
