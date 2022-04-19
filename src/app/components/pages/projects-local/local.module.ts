import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';
import {SharedModule} from '../../shared/shared.module';
import {ContentComponent} from './content-local/content/content.component';



@NgModule({
  declarations: [
    LocalComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    LocalRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class LocalModule { }
