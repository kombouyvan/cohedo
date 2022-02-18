import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LastNewDetailsRoutingModule } from './last-new-details-routing.module';
import { LastNewDetailsComponent } from './last-new-details.component';
import { LastNewDetailsContentComponent } from './content/last-new-details-content.component';
import {SharedModule} from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    LastNewDetailsComponent,
    LastNewDetailsContentComponent
  ],
  imports: [
    CommonModule,
    LastNewDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class LastNewDetailsModule { }
