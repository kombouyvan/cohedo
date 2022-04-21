import {Component} from '@angular/core';
import {DonationHelperService} from 'src/app/components/services/donation-helper.service';
import project from '../../../data/projects.json';
import {SwiperOptions} from 'swiper';
import { Project} from '../../../models/project';

@Component({
  selector: 'app-donation-box',
  templateUrl: './donation-box.component.html',
  styleUrls: ['./donation-box.component.css']
})
export class DonationBoxComponent extends DonationHelperService {
  // settings
  projects: Project[] = project;
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
