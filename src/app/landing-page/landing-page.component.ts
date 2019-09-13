import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
	public parking_places: any;
  	public cars_parked: any;
  constructor( public router:Router) { }

  ngOnInit() {
  }
  parkingForm = new FormGroup({
    parkingplace: new FormControl(''),
    noofcars: new FormControl(''),
  });
  login(parking_places="",cars_parked="") {
    console.log("details ",cars_parked+" "+parking_places);
    this.router.navigate(['/dashboard']);
    localStorage.setItem("pp",parking_places);
    localStorage.setItem("cp",cars_parked);

  }
}
