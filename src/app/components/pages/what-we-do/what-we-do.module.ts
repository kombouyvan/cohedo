import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { WhatWeDoRoutingModule } from './what-we-do-routing.module';
import { WhatWeDoComponent } from './what-we-do.component';
import { LasNewsContentComponent } from './content/las-news-content.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    WhatWeDoComponent,
    LasNewsContentComponent
  ],
  imports: [
    CommonModule,
    WhatWeDoRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class WhatWeDoModule { }
