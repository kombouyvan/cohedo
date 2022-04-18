import {Component, OnInit} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';
import projects from '../../../data/projects.json';
import { Project} from '../../../../models/project';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// @ts-ignore
export class ContentComponent extends BlogHelperService implements OnInit {
  projects: Project[] = projects;

  ngOnInit(): void {
  }

}
