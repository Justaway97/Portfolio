import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fadeInAnimation, glowAnimation } from '../animation/animation';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  @Input() startWithAnimation: boolean;

  ngOnInit(): void {
  }

  animate(animate1: any, animate2: any) {
    if (this.startWithAnimation === true) {
      return animate1;
    } else if (this.startWithAnimation === false) {
      return animate2;
    } else {
      return null;
    }
  }

}
