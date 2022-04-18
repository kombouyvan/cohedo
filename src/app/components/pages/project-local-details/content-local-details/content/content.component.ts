import {Component, OnInit} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';
import data from '../../../../data/projects.json';
import activities from '../../../../data/activity.json';
import {Activities, Activity, Project} from '../../../../models/project';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// @ts-ignore
export class ContentComponent extends BlogHelperService implements OnInit {

  project?: Project;
  projects: Project[] = data;
  activity: any ;


  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
          const {id} = params;
          // tslint:disable-next-line:radix
          this.activity = activities.find((item: Activities) => item.project_id === parseInt(id)).activities;
          // tslint:disable-next-line:radix
          this.project = data.find((item: Project) => item.id === parseInt(id));
        }
      );

  }

}
