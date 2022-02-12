import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  ID: number;
  name: string;
  model: String;
  price: number;
  text: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 12, name: 'Him', model: 'Toyota', price: 10000, text: 'used'},
  {ID: 13, name: 'Yaku', model: 'Toyota', price: 15000, text: 'new'},
  {ID: 17, name: 'Kuro', model: 'Honda', price: 20000, text: 'new'},
];