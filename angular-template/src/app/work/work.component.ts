import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  uhunt = "I like to challenge with some high level programming skill to enhance my logical thinking. This is the website that I train my logical thinking with."
  order = "This is a ordering system that created by me which built with Angular and Django."
  angularMaterial = "This is a Angular component project for me to refer and reuse the component whenever I need."

  content = [this.uhunt, this.order, this.angularMaterial]
  @Input() url: any;
  constructor() { }

  ngOnInit(): void {
  }

}
