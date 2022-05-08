import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true
    }
  ],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class CheckboxComponent extends BaseComponent {

  @Input() text: any;
  @Input() placeholder: any;
  @Input() options: any[];
  @Input() layout = 'column';

  constructor() {
    super();
  }

  override valueChanged(value: any, v: any) {
    if (value.checked) {
      this.value = this.value.concat(v.key);
    }
    if (!value.checked) {
      this.value = this.value.filter((v: any) => this.value.includes(v.key));
    }
    this.onChange(this.value);
    this.onTouched();
    this.change.emit(this.value);
  }

}
