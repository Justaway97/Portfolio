import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { fadeInAnimation, glowAnimation } from '../animation/animation';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutoCompleteComponent,
      multi: true
    }
  ],
  animations: [
    fadeInAnimation,
    glowAnimation
  ]
})
export class AutoCompleteComponent extends BaseComponent {

  @Input() options: any;
  @Input() validator: any;
  @Input() placeholder: any;
  @Input() hint: string;
  @Input() disabled = false;

  inputControl = new FormControl('')
  filterOptions: Observable<any[]>;
  shakeTrigger = false;
  isHover = false;

  constructor() {
    super();
  }

  public _filter(value: any): any {
    const filterValue = value.toLowerCase();
    return this.options.filter((opt: any) => opt.name.toLowerCase().includes(filterValue));;
  }

  override ngOnInit(): void {
    this.doFilter();
  }

  doFilter() {
    this.filterOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(opt: any): string {
    return opt && opt.name ? opt.name : '';
  }

}

