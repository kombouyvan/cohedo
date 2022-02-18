import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberShipComponent } from './member-ship.component';

const routes: Routes = [{ path: '', component: MemberShipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberShipRoutingModule { }
