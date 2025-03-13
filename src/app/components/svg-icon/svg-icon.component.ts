import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  imports: [],
  template: '<svg:use [attr.xlink:href]="href"></svg:use>',
  styles: ['']
})
export class SvgIconComponent {
  @Input() icon = '';

  get href() {
    return `/assets/images/svg/${this.icon}.svg#${this.icon}`
  }

}
