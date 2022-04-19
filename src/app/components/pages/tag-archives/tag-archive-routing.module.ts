import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagArchiveComponent } from './tag-archive.component';

const routes: Routes = [{ path: '', component: TagArchiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagArchiveRoutingModule { }
