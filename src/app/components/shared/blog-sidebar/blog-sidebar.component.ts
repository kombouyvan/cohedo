import {Component, Input} from '@angular/core';
import { BlogHelperService } from 'src/app/components/services/blog-helper.service';
import {Contact} from '../../models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent extends BlogHelperService {
  news: {title: string, photo: string, id: number}[] = [];
  @Input() title = '';
  @Input() enableLastNews = false;
  @Input() enableCategories = true;
  @Input() enableTags = true;
  @Input() useTitle = true;

  searchLastNews = '';

  constructor(router: Router, route: ActivatedRoute, sanitizer: DomSanitizer) {
    super(router, route, sanitizer);
    this.news = this.lastNewsTitle();
  }

  onSearchLastNews(): void {
    if (this.searchLastNews === '') {
      this.news = this.lastNewsTitle();
    } else {
      this.news = this.lastNewsTitle(this.searchLastNews);
    }
  }

  searchClicked($event: any): void {
    this.onSearchLastNews();
  }
}
