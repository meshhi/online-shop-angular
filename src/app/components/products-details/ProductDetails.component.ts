import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BeatsService } from '../../services/beats.service';

@Component({
selector: 'ProductDetails-component',
standalone: true,
templateUrl: './ProductDetails.component.html',
styleUrls: ['./ProductDetails.component.scss'],
imports: [HttpClientModule],
providers: [BeatsService]
})
export class ProductDetailsComponent implements OnInit {

constructor(public beatsService : BeatsService) {
}

ngOnInit(){

}
}