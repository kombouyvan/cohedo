import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerComponent } from './volunteer.component';
import { LasNewsContentComponent } from './content/las-news-content.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    VolunteerComponent,
    LasNewsContentComponent
  ],
  imports: [
    CommonModule,
    VolunteerRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class VolunteerModule { }
