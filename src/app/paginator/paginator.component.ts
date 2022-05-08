import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() length = 100;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 100];
  @Input() startWithAnimation = true;

  @Output() pageChange = new EventEmitter();

  pageEvent: PageEvent;

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(page: any) {
    this.pageEvent = page;
    this.pageChange.emit(page);
  }
}
