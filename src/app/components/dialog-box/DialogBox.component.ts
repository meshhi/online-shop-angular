import { Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BeatsService } from '../../services/beats.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'DialogBox-component',
  standalone: true,
  templateUrl: './DialogBox.component.html',
  styleUrls: ['./DialogBox.component.scss'],
  imports: [MatFormFieldModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule, MatDialogActions, MatDialogClose],
})
export class DialogBoxComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    views: new FormControl(0),
    image: new FormControl(''),
    genre: new FormControl(''),
    price_current: new FormControl(0),
    price_currency: new FormControl('usd'),
  });

  public dialogData: string | undefined;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public beatsService: BeatsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.myForm.value);
  }

  ngOnInit() {
    
  }
}
