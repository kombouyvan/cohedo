import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastNewDetailsComponent } from './last-new-details.component';

const routes: Routes = [{ path: '', component: LastNewDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastNewDetailsRoutingModule { }
