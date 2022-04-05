import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';

import {SharedModule} from '../../shared/shared.module';
import {BlogLeftModule} from '../blog-left/blog-left.module';



@NgModule({
  declarations: [
    LocalComponent,
  ],
  imports: [
    CommonModule,
    LocalRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    BlogLeftModule
  ]
})
export class LocalModule { }
