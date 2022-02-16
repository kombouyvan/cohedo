import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { LastNewsRoutingModule } from './last-news-routing.module';
import { LastNewsComponent } from './last-news.component';
import { LasNewsContentComponent } from './content/las-news-content.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [
    LastNewsComponent,
    LasNewsContentComponent
  ],
  imports: [
    CommonModule,
    LastNewsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class LastNewsModule { }
