import {Component} from '@angular/core';
import {DonationHelperService} from 'src/app/components/services/donation-helper.service';
import actual from '../../data/aktuelles.json';
import {SwiperOptions} from 'swiper';
import {Aktuelles} from '../../models/actual';

@Component({
  selector: 'app-aktual-box',
  templateUrl: './aktual-box.component.html',
  styleUrls: ['./aktual-box.component.css']
})

export class AktualBoxComponent {
  actual: Aktuelles[] = actual;
  // settings
  settings: SwiperOptions = {
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    centeredSlides: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
  };

}
