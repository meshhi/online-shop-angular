import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BeatsService } from '../../services/beats.service';
import { Subscription, map } from 'rxjs';
import { Beat } from '../../models/Beats';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'ProductDetails-component',
  standalone: true,
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss'],
  imports: [
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
  ],
})
export class ProductDetailsComponent implements OnInit {
  public beat!: Beat;
  public beatSubscription!: Subscription;

  constructor(
    public beatsService: BeatsService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.beatSubscription = this.activatedRoute.data.subscribe({
      next: (data: any) => {
        this.beat = data["data"];
      },
    });
  }

  ngOnDestroy() {
    this.beatSubscription.unsubscribe();
  }
}
