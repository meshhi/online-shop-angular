import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
selector: 'Basket-component',
standalone: true,
imports: [MatIconModule],
templateUrl: './Basket.component.html',
styleUrls: ['./Basket.component.scss']
})
export class BasketComponent implements OnInit {

constructor() {
}

ngOnInit(){

}
}