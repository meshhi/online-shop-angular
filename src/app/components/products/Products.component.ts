import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BeatsService } from '../../services/beats.service';
import { Beat } from '../../models/Beats';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/DialogBox.component';

@Component({
  selector: 'Products-component',
  standalone: true,
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  imports: [HttpClientModule, MatCardModule, MatButtonModule, CommonModule, RouterLink, RouterLink, MatAutocompleteModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ProductsComponent implements OnInit{
  public beats: Beat[] = [];
  public beatsSubscription!: Subscription;
  public canEdit: boolean = true;
  public canView: boolean = true;

  public dialogRefSubscription: Subscription | undefined;

  constructor(public beatsService: BeatsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.beatsSubscription = this.beatsService.getBeats().subscribe({
      next:(data: Beat[]) => {
        this.beats = data;
      }
    });
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.data = {test: "testData"};
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    this.dialogRefSubscription = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    if(this.beatsSubscription) this.beatsSubscription.unsubscribe();
    if(this.dialogRefSubscription) this.dialogRefSubscription.unsubscribe();
  }
}
