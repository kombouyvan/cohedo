import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProjectsInternationalRoutingModule } from './projects-international-routing.module';

import {SharedModule} from '../../shared/shared.module';
import {ProjectsInternationalComponent} from './projects-international.component';
import {CheckoutModule} from '../checkout/checkout.module';



@NgModule({
  declarations: [
    ProjectsInternationalComponent,
  ],
  imports: [
    CommonModule,
    ProjectsInternationalRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    CheckoutModule
  ]
})
export class ProjectsInternationalModule { }
