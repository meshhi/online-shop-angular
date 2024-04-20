import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HeaderComponent } from './components/ui/header/Header.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BeatsService } from './services/beats.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent, HeaderComponent, MatIconModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BeatsService]
})
export class AppComponent {
  title = 'online-shop-angular';
}
