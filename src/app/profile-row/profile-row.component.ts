import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Frederick';
  @Input() img = '../../assets/img/hamster/1.jpg';
  @Input() description = '3 Jahre alt';

  constructor() { }

  ngOnInit(): void {
      
  }
}
