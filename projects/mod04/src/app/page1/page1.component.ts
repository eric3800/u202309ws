import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component {
  title = '屬性綁定';
  picURL = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW190Wv?ver=d8db";
  isDisable = true;
}
