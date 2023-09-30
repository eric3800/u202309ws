import { Component, OnInit } from '@angular/core';
import { Student, students } from '../student';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styles: [
  ]
})
export class Page7Component implements OnInit{

  students: Student[] = students;
  thisMonth:number;
  constructor(){
    this.thisMonth=new Date(Date.now()).getMonth();
  }

  ngOnInit(): void { }

}
