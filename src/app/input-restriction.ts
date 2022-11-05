import {Directive, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[inputPattern]'
})
export class InputRestrictionDirective {
  @Input('inputrestriction') InputRestriction: string;
  constructor() {
  }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if (event.key === '+') {
      event.preventDefault();
    }

    if (event.target.selectionStart > 0 && event.key === '-') {
      event.preventDefault();
    }

    return new RegExp(this.InputRestriction).test(event.key);
  }
}
