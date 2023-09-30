import { Component } from '@angular/core';
import { Picture, picture } from '../picture';


@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component {
  public pic = picture;

  public pics: Picture[];

  constructor() {
    this.pics = [this.pic,
      new Picture(2, "https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "22", "222"),
      new Picture(3, "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "33", "333")];
  }

  ngOninit(): void {

  }
}
