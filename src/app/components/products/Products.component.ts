import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BeatsService } from '../../services/beats.service';
import { Beat } from '../../models/Beats';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Products-component',
  standalone: true,
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  imports: [HttpClientModule, MatCardModule, MatButtonModule, CommonModule, RouterLink],
  providers: [BeatsService]
})
export class ProductsComponent implements OnInit{
  public beats: Beat[] = [];
  public beatsSubscription!: Subscription;

  constructor(public beatsService: BeatsService) {}

  ngOnInit() {
    this.beatsSubscription = this.beatsService.getBeats().subscribe({
      next:(data: Beat[]) => {
        this.beats = data;
      }
    });
  }

  ngOnDestroy() {
    if(this.beatsSubscription) this.beatsSubscription.unsubscribe();
  }
}
