import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() panelOpenState = false;
  @Input() title: string;
  @Input() content: string;
  @Input() expand: string;
  @Input() hideToggle = true;

  constructor() { }

  ngOnInit(): void {
  }

}
