import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inTheBox]'
})

export class InTheBoxDirective {
  // @Input() borderStyle: string = "";
  @Input('inTheBox') borderStyle: string = "";

  @HostListener("mouseenter") onMouseEnter() {
    this.putInTheBox("solid 2px red");
    this.putInTheBox(this.borderStyle);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.putInTheBox("none");
  }

  constructor(private el: ElementRef) {
    // this.putInTheBox("solid 2px red");
  }

  private putInTheBox(bordreStyle: string) {
    this.el.nativeElement.style.border = bordreStyle;
  }


}
