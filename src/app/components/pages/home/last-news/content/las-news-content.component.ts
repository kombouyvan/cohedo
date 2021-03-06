import {Component, Input} from '@angular/core';
import { BlogHelperService } from 'src/app/components/services/blog-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './las-news-content.component.html',
  styleUrls: ['./las-news-content.component.css']
})
export class LasNewsContentComponent extends BlogHelperService {
  @Input() title = '';
}
