import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";
import { ProposalsComponent } from "./proposals/proposals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HamsterCardComponent, ProposalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hamsterbook';

  postTexts = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen, Freut mich, dass ihr hier seid!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt',
    'Ich esse gerne Kekse'
  ];

  postImages = [
    './../../assets/img/hamster/1.jpg',
    './../../assets/img/hamster/2.jpg',
    './../../assets/img/hamster/3.jpg',
    './../../assets/img/hamster/4.jpg'
  ];
    

}
