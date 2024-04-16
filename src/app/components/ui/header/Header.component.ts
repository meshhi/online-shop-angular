import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatAutocompleteModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public options: string[] = ['first', 'second', 'third'];
  
  constructor() {}

  ngOnInit() {}
}
