import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  uhunt = "I like to challenge with some high level programming skill to enhance my logical thinking. This is the website that I train my logical thinking with. Strongly recommended for those who want to challenge themselves!!"
  order = "This is a ordering system that created by me which built with Angular and Django. This application was specially design for my relative company usage =)"
  angularMaterial = "This is a Angular component project for me to refer and reuse the component whenever I need. It is act like a notebook HAHA."

  content = [this.uhunt, this.order, this.angularMaterial]
  @Input() url: any;
  constructor() { }

  ngOnInit(): void {
  }

}
