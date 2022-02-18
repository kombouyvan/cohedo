import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { MemberShipRoutingModule } from './member-ship-routing.module';
import { MemberShipComponent } from './member-ship.component';
import { LasNewsContentComponent } from './content/las-news-content.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MemberShipComponent,
    LasNewsContentComponent
  ],
  imports: [
    CommonModule,
    MemberShipRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class MemberShipModule { }
