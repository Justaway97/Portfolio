import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeInAnimation, glowAnimation } from '../animation/animation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class ToolbarComponent implements OnInit {

  @Input() left: any[];
  @Input() right: any[];
  @Input() color = 'primary';
  @Input() startWithAnimation = false;
  @Input() list: any[];
  @Input() vertical = false;
  @Input() rotate = false;

  @Output() action = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    console.log(this.startWithAnimation, 'start');
  }

  onClick(event: any) {
    console.log(event);
    this.action.emit(event);
  }

}
