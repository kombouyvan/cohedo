import {Component, Input} from '@angular/core';
import { BlogHelperService } from 'src/app/components/services/blog-helper.service';
import {Contact} from '../../../models/contact';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-content',
  templateUrl: './las-news-content.component.html',
  styleUrls: ['./las-news-content.component.css']
})
export class LasNewsContentComponent  {
  @Input() title = '';
  model = new Contact;
  submitted = false;
  error: {} | undefined;

  constructor(private contactService: ContactService) {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // return this.contactService.contactForm(this.model).subscribe(
    //   data => this.model = data,
    //   error => this.error = error
    // );
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }

}

