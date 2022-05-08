import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true
    }
  ],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class SliderComponent extends BaseComponent {

  @Input() thumbLabel = true;
  @Input() max: number;
  @Input() min: number;
  @Input() step = 1;

  constructor() {
    super();
  }

}
