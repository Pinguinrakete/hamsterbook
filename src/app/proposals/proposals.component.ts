import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRowComponent } from "../profile-row/profile-row.component";

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [CommonModule, ProfileRowComponent],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent implements OnInit {

  names = ['Marius','Franziska','Josephine','Patrick'];
  texts = ['2 Jahre alt','Gräbt gerne Löcher','Spielt gerne','Hamsterrad-Freak'];
  images = ['../../assets/img/hamster/5.jpg','../../assets/img/hamster/6.jpg','../../assets/img/hamster/7.jpg','../../assets/img/hamster/8.jpg'];

  constructor() { }

  ngOnInit(): void {

  }
}
