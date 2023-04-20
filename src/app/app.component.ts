import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // object array of details to be included in the card app
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/img/tree.jpeg',
      username: '@nature',
      content: 'I saw this neat tree today'
    }
    ,
    { 
      title: 'Snowy Mountain',
      imageUrl: 'assets/img/mountain.jpeg', 
      username: '@mountainlover',
      content: 'Here is a picture of a snowy mountain'
    }
    ,
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/img/biking.jpeg',
      username: '@bikinglover',
      content: 'I did some biking today'
      
    }
  ];
}
