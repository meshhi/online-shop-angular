import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-component',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent implements OnInit {
  @Input() public title: string = 'Card';
  constructor() {}

  ngOnInit() {}
}
