import {Component} from '@angular/core';
import {DonationHelperService} from 'src/app/components/services/donation-helper.service';

@Component({
  selector: 'app-various-box',
  templateUrl: './various-box.component.html',
  styleUrls: ['./various-box.component.css']
})
export class VariousBoxComponent extends DonationHelperService {
  various = [{
    name: 'GESUNDHEIT UND ERNÄHRUNG',
    img: '/assets/img/various/various-1.jpg'
  }, {
    name: 'POLITISCH-SOZIAL-HISTORISCH',
    img: '/assets/img/various/various-2.jpg'
  }, {
    name: 'ESSEN VERBINDET UNS',
    img: '/assets/img/various/various-3.jpg'
  }, {
    name: 'VIELFALT UND PERSPEKTIVEN',
    img: '/assets/img/various/various-4.jpg'
  }];
}
