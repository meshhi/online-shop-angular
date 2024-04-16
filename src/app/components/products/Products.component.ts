import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'Products-component',
  standalone: true,
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  imports: [HttpClientModule],
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe({next:(data:any) => console.log(data)});
  }
}
