import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs';
import { spinnerFlipAnimation } from '../animation/animation';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [
    spinnerFlipAnimation
  ],
})
export class SpinnerComponent implements OnInit {

  @Input() url: string;
  @Input() height = 24;
  @Input() width = 10;
  @Input() startWithAnimation = true;

  @Output() onClick = new EventEmitter();

  styles: any;
  spinnerClick = false;
  canClick = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.styles = {
      'height': this.height.toString().concat('%'),
      'width': this.width.toString().concat('%'),
      'top': ((100 - this.height) / 2).toString().concat('%'),
      'left': ((100 - this.width) / 2).toString().concat('%'),
      'position': 'absolute',
    }
    setTimeout(() => {
      this.canClick = true;
    }, 3000);
  }

  click() {
    if (this.canClick) {
      console.log('click');
      this.spinnerClick = !this.spinnerClick;
      let element = this.elementRef.nativeElement.querySelector('.image');
      setTimeout(() => {
        this.onClick.emit();
      }, 1000);
    }
  }
}
