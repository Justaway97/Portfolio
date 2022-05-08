import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() { }

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    console.log(element);
    this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement {
    const element = <HTMLElement>document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  scrollToCenterElementById(id: string) {
    const element = this.__getElementById(id);
    this.scrollToElementCenter(element);
  }
  scrollToElementCenter(element: HTMLElement) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
}
