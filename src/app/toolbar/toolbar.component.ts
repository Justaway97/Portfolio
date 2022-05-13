import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class ToolbarComponent extends BaseComponent {

  @Input() left: any[];
  @Input() right: any[];
  @Input() color = 'primary';
  @Input() list: any[];
  @Input() vertical = false;
  @Input() rotate = false;

  @Output() action = new EventEmitter();

  constructor() {
    super();
  }

  onClick(event: any) {
    console.log(event);
    this.action.emit(event);
  }

}
