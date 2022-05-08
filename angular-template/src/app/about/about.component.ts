import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  urls = [
    'assets/s-red.png',
    'assets/o-red.png',
    'assets/n-red.png',
    'assets/g-red.png',
    'assets/m-red.png',
    'assets/i-red.png',
    'assets/n-red.png',
    'assets/g-red.png',
  ]

  texts = [
    ['H', 'i', ' ', 'I', ' ', 'a', 'm'],
    ['S', 'o', 'n', 'g', ' ', 'M', 'i', 'n', 'g'],
    ['A', ' ', 'F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ',
      'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
