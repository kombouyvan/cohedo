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
      name: 'Kevin Ndeme',
      sur_name: 'Matuke',
      function: 'Vorsitzender',
      picture: 'https://bootdey.com/img/Content/avatar/avatar6.png'
    },
    {
      name: 'Rosemary ',
      sur_name: 'Fokong',
      function: 'stellvertretende vorsitzende',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Dr. Ferdinand',
      sur_name: 'Talontsi',
      function: 'Generalsekretär',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Divine',
      sur_name: 'Achale',
      function: 'Schatzmeisterin',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Glenn Akama',
      sur_name: 'Eseme',
      function: 'Koordination',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      name: 'Abbasse',
      sur_name: 'So',
      function: 'Koordination',
      picture: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    }
  ];
}
