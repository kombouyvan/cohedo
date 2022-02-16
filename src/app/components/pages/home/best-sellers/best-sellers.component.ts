import { Component, Input } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent extends ShopService {
  @Input() title = '';
  @Input() partner = false;
  @Input() umber = true;

  settings: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
    navigation: {
      nextEl: '.about-button-next',
      prevEl: '.about-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  };
}
