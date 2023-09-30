import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod05 - 購物車';
  QTY: number = 12;
  Stock: number = 10;

  vDate = new Date();
  vString = "This is a book";
  vMoney=382140;
  vNumber=39.85;
  vNumber2=31.11;
  vPercent=10;

  @ViewChild("titleB") h1: ElementRef | any;
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.h1.nativeElement);
    let title1 = this.h1.nativeElement;
    title1.addEventListener("click", () => title1.innerHTML = "title1 + click event");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked:", this.h1.nativeElement);
  }


}
