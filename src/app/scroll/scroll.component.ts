
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  @Input() data: any[];
  @Output() click = new EventEmitter();

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  scrollToId(d: any) {
    console.log('click ', d);
    // this.scrollService.scrollToElementById(d);
    this.click.emit(d);
  }

}
