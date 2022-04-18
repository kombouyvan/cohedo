import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import projects from '../../data/projects.json';
import {Project} from '../../models/project';

@Component({
  selector: 'app-blog-right',
  templateUrl: './project-local-details.component.html',
  styleUrls: ['./project-local-details.component.css']
})
export class ProjectLocalDetailsComponent implements OnInit {


  ngOnInit(): void { }



}
