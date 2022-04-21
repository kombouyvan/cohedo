import {Component, OnInit} from '@angular/core';
import international from '../../../../data/international.json';


@Component({
  selector: 'app-content-international',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// @ts-ignore
export class ContentComponent implements OnInit {
  projects = [];

  ngOnInit(): void {
    this.projects = international;
  }

}
