import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { LasNewsContentComponent } from './content/las-news-content.component';
import {SharedModule} from '../../shared/shared.module';
import {AboutModule} from '../about/about.module';



@NgModule({
  declarations: [
    BoardComponent,
    LasNewsContentComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    AboutModule
  ]
})
export class BoardModule { }
