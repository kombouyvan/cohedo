import {Component, OnInit} from '@angular/core';
import {StoryHelperService} from 'src/app/components/services/story-helper.service';
import {ActivatedRoute} from '@angular/router';
import {Activities, Activity} from '../../../models/project';
import activity_data from '../../../data/activity.json';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// @ts-ignore
export class ContentComponent extends StoryHelperService implements OnInit {

  activities?: Activities;
  activity: Activity | undefined;

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
          const {activity_id, project_id} = params;
          // tslint:disable-next-line:radix
          this.activities = activity_data.find((item: Activities) => item.project_id === parseInt(project_id));
          // tslint:disable-next-line:radix
          this.activity = this.activities?.activities.find((item: Activity) => item.id === parseInt(activity_id));
        }
      );
  }
}
