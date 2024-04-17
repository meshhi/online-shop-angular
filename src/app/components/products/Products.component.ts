import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'Products-component',
  standalone: true,
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  imports: [HttpClientModule, MatCardModule, MatButtonModule, CardComponent],
})
export class ProductsComponent implements OnInit {
  public test: string[] = ['first', 'second', 'third'];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe({next:(data:any) => console.log(data)});
  }
}
