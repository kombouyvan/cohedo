import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { CompletedProjectsRoutingModule } from './completed-projects-routing.module';
import { CompletedProjectsComponent } from './completed-projects.component';
import { LasNewsContentComponent } from './content/las-news-content.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    CompletedProjectsComponent,
    LasNewsContentComponent
  ],
  imports: [
    CommonModule,
    CompletedProjectsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class CompletedProjectsModule { }
