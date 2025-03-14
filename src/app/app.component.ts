import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HamsterCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hamsterbook';
}
