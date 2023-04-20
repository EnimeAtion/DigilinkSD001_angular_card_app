import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // declaring and initializing the properties
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';
 

  constructor() { }

  ngOnInit() {}
} 


