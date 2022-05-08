import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInAnimation, glowAnimation, tableExpandAnimation } from '../animation/animation';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    tableExpandAnimation,
    fadeInAnimation,
    glowAnimation
  ]
})
export class TableComponent implements AfterViewInit {

  @Input() data: any[];
  @Input() setting: any[];
  @Input() expand = false;
  @Input() action: any[];
  @Input() requiredSelect = false;
  @Input() button: any[];
  @Input() displaySelect: boolean[];
  @Input() startWithAnimation = false;

  @Output() page = new EventEmitter();
  @Output() buttonClick = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  tableColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  expandedElement: any;
  selection = new SelectionModel<any>(true, []);

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      this.data = changes['data'].currentValue;
      this.dataSource = new MatTableDataSource(this.data);
    }
    if ('displaySelect' in changes) {
      this.displaySelect = changes['displaySelect'].currentValue;
    }
  }

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    if (this.setting !== undefined) {
      for (const s of this.setting) {
        this.tableColumns.push(s.header);
      }
    }
    if (this.action !== undefined) {
      this.tableColumns.push('action');
    }
    if (this.requiredSelect) {
      this.tableColumns = ['select'].concat(this.tableColumns);
    }
    this.dataSource = new MatTableDataSource(this.data);
  }

  getSelectedRow(row: any) {
    console.log('click');
  }

  pageChange(event: any) {
    console.log(event);
    this.page.emit(event);
  }

  onActionClick(event: any, element: any) {
    if (event.action.text === 'expand') {
      this.expandedElement = this.expandedElement === element ? null : element;
    }
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    let numRows = 0;
    let index = 0;
    for (const s of this.dataSource.data) {
      if (this.displaySelect[index++]) {
        numRows = numRows + 1;
      }
    }
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    let index = 0;
    for (const s of this.dataSource.data) {
      if (this.displaySelect[index++]) {
        this.selection.select(s);
      }
    }
  }

  btnClick(event: any) {
    this.buttonClick.emit({ event: event, selection: this.selection });
  }
}
