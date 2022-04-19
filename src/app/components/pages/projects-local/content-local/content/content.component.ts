import {Component, OnInit} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';
import data from '../../../../data/projects.json';
import {Project} from '../../../../models/project';


@Component({
  selector: 'app-content-local',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// @ts-ignore
export class ContentComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = data;
  }

}
