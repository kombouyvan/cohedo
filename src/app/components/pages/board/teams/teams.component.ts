import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  @Input() team?: Teams;

  constructor() {
  }

  ngOnInit(): void {
  }


}

interface Teams {

  name: string;
  sur_name: string;
  function: string;
  picture: string;

}
