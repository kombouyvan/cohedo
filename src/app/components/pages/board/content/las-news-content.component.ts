import {Component, Input} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './las-news-content.component.html',
  styleUrls: ['./las-news-content.component.css']
})
export class LasNewsContentComponent extends BlogHelperService {
  @Input() title = '';

  teams = [
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar6.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar8.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar6.png'
    },
    {
      name: 'Manuella',
      sur_name: 'Nevoresky',
      function: 'CEO-FOUNDER',
      picture: 'https://bootdey.com/img/Content/avatar/avatar8.png'
    }


  ];
}
