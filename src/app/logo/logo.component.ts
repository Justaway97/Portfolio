import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() url = '/assets/logo-s.png';
  @Input() top = 2;
  @Input() text = 'S';
  @Input() imageSize = 5;
  @Input() left = 0;

  constructor() { }

  styles = {}
  textStyles = {}
  ngOnInit(): void {
    if (this.left === 0) {
      this.left = this.top;
    }
    const baseWidth = 1512;
    const baseHeight = 844;
    // this.top = this.top * 0.01
    // if (this.left === 0) {
    //   this.left = (window.innerWidth / window.innerHeight) * this.top
    // } else {
    //   this.left = this.left * 0.01
    // }
    // console.log(window.innerWidth, window.innerHeight);
    // this.styles = {
    //   // width: '10%',
    //   height: this.imageSize.toString().concat('%'),
    //   top: Math.floor(window.innerWidth * this.top).toString().concat('px'),
    //   left: Math.floor(window.innerHeight * this.left).toString().concat('px'),
    // }
    // this.textStyles = {
    //   'font-size': (this.imageSize + window.innerHeight / 1000).toString().concat('vh'),
    //   top: Math.floor(window.innerWidth * this.top + (window.innerWidth / 100) + (this.top * 100) + 3).toString().concat('px'),
    //   // left: Math.floor(window.innerHeight * this.left - (this.left * 100 / (window.innerHeight * this.left - this.left * 100))).toString().concat('px'),
    //   left: Math.floor(window.innerHeight * this.left * 1.015).toString().concat('px'),
    // }
    this.styles = {
      // width: '10%',
      // height: this.imageSize * window.innerHeight / baseHeight - this.imageSize * window.innerWidth / baseWidth >= 0 ? 'auto' : (this.imageSize * window.innerHeight / baseHeight).toString().concat('%'),
      // 'max-height': Math.min(this.imageSize * window.innerHeight / baseHeight, this.imageSize * window.innerWidth / baseWidth).toString().concat('vh'),
      'height': Math.min(this.imageSize * window.innerHeight / baseHeight, this.imageSize * window.innerWidth / baseWidth).toString().concat('vh'),
      // 'min-height': Math.min(this.imageSize * window.innerHeight / baseHeight, this.imageSize * window.innerWidth / baseWidth).toString().concat('vh'),
      // width: this.imageSize * window.innerHeight / baseHeight - this.imageSize * window.innerWidth / baseWidth < 0 ? 'auto' : (this.imageSize * window.innerWidth / baseWidth).toString().concat('%'),
      // 'max-width': Math.min(this.imageSize * window.innerHeight / baseHeight, this.imageSize * window.innerWidth / baseWidth).toString().concat('vw'),
      // width: (this.imageSize * window.innerWidth / baseWidth).toString().concat('%'),
      top: this.top.toString().concat('%'),
      left: this.left.toString().concat('%'),
    }
    this.textStyles = {
      'font-size': (this.imageSize * 0.8 * Math.min(1.5 * window.innerHeight / baseHeight, 1.5 * window.innerWidth / baseWidth)).toString().concat('vh'),
      top: (this.imageSize * 0.8 * Math.min(window.innerHeight / baseHeight, window.innerWidth / baseWidth)).toString().concat('%'),
      // left: Math.floor(window.innerHeight * this.left - (this.left * 100 / (window.innerHeight * this.left - this.left * 100))).toString().concat('px'),
      left: this.left.toString().concat('%'),
    }
  }

  getClassName(string1: string) {
    return string1.concat(this.text.toLowerCase());
  }
}
