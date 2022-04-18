import {Component, Input} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './las-news-content.component.html',
  styleUrls: ['./las-news-content.component.css']
})
export class LasNewsContentComponent extends BlogHelperService {
  @Input() title = '';


  lastestNews = [{
    image: '/assets/img/last-news/lastest-new-4.png',
    title: 'REMIT – Refugees Empowerment and Migrants Training Modul 2: Qualifizierung im Ehrenamt',
    date : '2021-05-04',
    description:''
  }];
}
