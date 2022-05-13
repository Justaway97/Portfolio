import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner-text',
  templateUrl: './corner-text.component.html',
  styleUrls: ['./corner-text.component.scss']
})
export class CornerTextComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
