import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastNewsComponent } from './last-news.component';

const routes: Routes = [{ path: '', component: LastNewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastNewsRoutingModule { }
