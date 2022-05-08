import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioButtonComponent,
      multi: true
    }
  ],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class RadioButtonComponent extends BaseComponent {

  @Input() options: any[];
  @Input() label: string;
  @Input() layout = 'column';

  constructor() {
    super();
  }
}
