import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TagArchiveRoutingModule } from './tag-archive-routing.module';
import { TagArchiveComponent } from './tag-archive.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
    declarations: [
        TagArchiveComponent,
        ContentComponent
    ],
    exports: [
        ContentComponent
    ],
    imports: [
        CommonModule,
        TagArchiveRoutingModule,
        SharedModule,
        NgbModule
    ]
})
export class TagArchiveModule { }
