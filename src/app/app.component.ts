import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
    name =  'Ray';
    artists = ['Barot Bellingham', 'Jonathan Ferrar', 'Hillary Post'];

    onClick(myName) {
      this.name=myName;
    }

    addArtist(myArtist) {
      this.artists.push(myArtist);
    }

}
