import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class MenuComponent extends BaseComponent {

  @Input() options: any[];
  @Output() action = new EventEmitter();

  constructor() {
    super();
  }

  actionSelected(index: number, action: any) {
    this.action.emit({ index, action });
  }

}
