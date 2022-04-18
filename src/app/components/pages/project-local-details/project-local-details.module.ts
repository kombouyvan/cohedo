import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

import {ProjectLocalDetailsRoutingModule} from './project-local-details-routing.module';
import {ProjectLocalDetailsComponent} from './project-local-details.component';
import {SharedModule} from '../../shared/shared.module';
import {ContentComponent} from './content-local-details/content/content.component';


@NgModule({
  declarations: [
    ProjectLocalDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ProjectLocalDetailsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
  ]
})
export class ProjectLocalDetailsModule {
}
