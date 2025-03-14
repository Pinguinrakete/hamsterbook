import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friendbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.scss'
})
export class FriendboxComponent implements OnInit {

  names = ['Marius','Franziska','Josephine','Patrick'];
  texts = ['2 Jahre alt','Gräbt gerne Löcher','Spielt gerne','Hamsterrad-Freak'];
  images = ['../../assets/img/hamster/5.jpg','../../assets/img/hamster/6.jpg','../../assets/img/hamster/7.jpg','../../assets/img/hamster/8.jpg'];

  constructor() { }

  ngOnInit(): void {

  }
}
