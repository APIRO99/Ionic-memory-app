import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
  @Input() flipped = false;
  @Input() boardSize = false;
  @Input() img: string;
  @Output() clicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    
  }

  cardTouched = (id: number) => this.clicked.emit(id);





  /**************************** Style ****************************/

  imageWith = (boardSize) => {
    return (boardSize == 2) ? '150px' 
      : (boardSize == 4)    ? '90px' : '60px'
  }

  imageHeight = (boardSize) => {
    return (boardSize == 2) ? '250px'
      : (boardSize == 4)    ? '155px' : '120px'
  }

  /***************************************************************/
}
