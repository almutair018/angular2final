import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  name: string;
  artists: any;

  constructor() {
    this.name =  'Ray';
    this.artists = [
      {
          name: 'Barot Bellingham',
          school: 'Penn State'
      },{
          name: 'Hillary Post',
          school: 'University of Illinois'
      }
    ];
  }
}
