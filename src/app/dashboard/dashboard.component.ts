import { Component, OnInit } from '@angular/core';
import { DETAILS } from '../data';
import * as $ from 'jquery';
export interface Color {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
pp; cp; selectedColor; charges = 20;
colors: Color[] = [
  {value: 'Red', viewValue: 'Red'},
  {value: 'Blue', viewValue: 'Blue'},
  {value: 'White', viewValue: 'White'},
  {value: 'Magenta', viewValue: 'Magenta'},
  {value: 'Black', viewValue: 'Black'}
];

displayedColumns: string[] = ['no', 'car_no', 'color', 'slot_no' , 'date', 'button'];
dataSource = DETAILS;
  constructor() { }

  ngOnInit() {
    this.pp = localStorage.getItem("pp");
    this.cp = localStorage.getItem("cp");
  }
  changeColor(e){
    this.selectedColor = e;
  }
search(){
  var reg = document.getElementById("reg_no")['value'];
  for(var x = 0; x< this.dataSource.length; x++){
   if( this.dataSource[x]["car_no"] == reg &&  this.dataSource[x]["color"] === this.selectedColor) {
     alert("Matching car found which was parked on "+this.dataSource[x]["date"]+" and on slot "+this.dataSource[x]["slot_no"]);
   }
  
  }
  
}

remove(e, i){
  console.log("remove event ",e.no+" "+i);
  alert("Thank you for parking. Please pay up Rs 20 for the service offered. Have a nice day!!!");
  console.log(document.getElementsByTagName("tr")[e.no]);
  var elem = document.getElementsByTagName("tr")[e.no];
  elem.remove();
  console.log("available cars ",this.cp);
  this.cp--;
  alert("Total charges collected: Rs  "+this.charges);
  this.charges += 20;
}

}
