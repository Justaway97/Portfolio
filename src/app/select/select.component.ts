import { BaseCdkCell } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class SelectComponent extends BaseComponent {

  @Input() options: any[];
  @Input() label: string;

  constructor() {
    super();
  }

}
