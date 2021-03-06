import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(
    private element: ElementRef
  ) { 
    element.nativeElement.style.color="#7f82d1"
  }

}
