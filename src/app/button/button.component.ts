import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class ButtonComponent extends BaseComponent {

  @Input() color: any;
  @Input() buttonType: any;
  @Input() text: any;
  @Input() rotate = 0;
  @Input() height = 'min(3vh, 3vw)';
  @Input() tooltip: any;

  @Output() onClick = new EventEmitter();

  rotateDeg: string;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    this.rotateDeg = 'rotate('.concat(this.rotate.toString(), 'deg)');
    console.log(this.rotateDeg);
  }

  btnClick() {
    this.onClick.emit(this.text);
  }

}
