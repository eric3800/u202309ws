import { Component, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'CheckStock',
  templateUrl: './check-stock.component.html',
  styles: [
  ]
})
export class CheckStockComponent {

  @Input() Stock: number = 0;
  @Input() QTY = 0;
  info = "";
  lower = false;


  // ngOnChanges() {
  //   console.log("this.Stock =" + this.Stock)
  //   console.log("this.QTY =" + this.QTY)
  //   this.lower = (this.Stock < this.QTY);
  //   this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
  //   console.log("ngOnChanges     ---")
  // }

  ngDoCheck() {
    console.log("this.Stock =" + this.Stock)
    console.log("this.QTY =" + this.QTY)
    this.lower = (this.Stock < this.QTY);
    this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
    console.log("ngOnChanges     ---")
  }

  GetStock() {
    this.Stock = 20;
    console.log("目前庫存: " + this.Stock);
  }


  @ContentChildren('spanA') spans: any;
  ngAfterContentInit() {
    console.log("ngAfterContentInit -");
    this.spans.forEach((element: any) => {
      console.log("\t", element);
    })
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked -");
    this.spans.forEach((element: any) => {
      console.log("\t", element);
    });
  }

}
