import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap'; 
// this operator expects an observable and does not take into acount the previous request result and action
//rxjs operators deal with complex asyncronus tasks
 
import { PassengerDashboardServices } from "../../passenger-dashboard.service";
import { Passenger } from '../../models/passenger.interface';



@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template:`
    <div>
      <button (click)="goBack()">&lsaquo; Go back</button>
      <passenger-form
        [detail] = "passenger"
        (update) = "onUpdatePassenger($event)"
      >
      </passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit{
  passenger: Passenger;
  constructor(
    private router: Router, //gives us the actual router
    private route: ActivatedRoute, //gives us the actual rout
    //we need to subscribe to the changes of the rout, reed the params and pass them dinamiclly in 
    //our service - PassengerDashboardService
    private passengerService: PassengerDashboardServices
    ) {}

  ngOnInit() {
    this.route.params // wait and get the new params from url - this is an observable
    .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
    //.switchMap gets the Passenger like data from the observable and returns a new observable, a http 
    // request, with the passengerService, with the id from the url
    .subscribe((data: Passenger) => this.passenger = data);
    // when the request to db is done we get the passenger and update this.passenger
    // after that the <passenger-form> component displays with the requested passenger info from url
  }

  onUpdatePassenger(event: Passenger) {
    //because the passenger returned from the form does not have the children property I merged first 
    //the event with this.passenger and made the request with this object
    //no action in .subscribe as this.passenger is already up-to-date
    this.passenger = Object.assign({}, this.passenger, event)
    console.log(this.passenger);
    this.passengerService
    .updatePassenger(this.passenger)
    .subscribe((data: Passenger) => {});
  }
  goBack(){
    this.router.navigate(['/passengers']);
    // this is imperial routing because we are using the nativ js api 
    //we are telling the class to use the router 
  }
}