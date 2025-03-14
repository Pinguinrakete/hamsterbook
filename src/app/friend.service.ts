import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  names: string[] = [];
  texts: string[] = [];
  images: string[] = [];

  constructor() { }

  addFriend(name:string, text:string, image:string) {
    this.names.push(name);
    this.texts.push(text);    
    this.images.push(image);      
  }
}
