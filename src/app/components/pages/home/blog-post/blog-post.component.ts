import {Component} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent extends BlogHelperService {

  months = [
    {
      id: 1,
      month: 'January'
    },
    {
      id: 2,
      month: 'Febuary'
    },
    {
      id: 3,
      month: 'March'
    },
    {
      id: 4,
      month: 'April'
    },
    {
      id: 5,
      month: 'May'
    },
    {
      id: 6,
      month: 'June'
    },
    {
      id: 7,
      month: 'July'
    },
    {
      id: 8,
      month: 'August'
    },
    {
      id: 9,
      month: 'September'
    },
    {
      id: 10,
      month: 'October'
    },
    {
      id: 11,
      month: 'November'
    },
    {
      id: 13,
      month: 'December'
    }
  ];
}
