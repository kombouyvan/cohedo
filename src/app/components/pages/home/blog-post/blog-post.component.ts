import {Component, OnInit} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';
import months from '../../../data/months.json';
import events from '../../../data/events.json';
import {Events} from '../../../models/event';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent extends BlogHelperService implements OnInit {

  idMonth = new Date().getMonth();
  monthSelected = this.idMonth;
  data: Events[] = events;
  monthToBeDisplayed = [
    ...months.filter((value: { id: number, month: string }) => value.id >= this.idMonth),
    ...months.filter((value: { id: number, month: string }) => value.id < this.idMonth)
  ];

  ngOnInit(): void {
    super.ngOnInit();
    this.onSelectMonth(this.idMonth);
  }

  onSelectMonth(id: number): void {
    this.monthSelected = id;
    this.data = events.filter((event: Events) => new Date(event.date).getMonth() === id);
  }
}
