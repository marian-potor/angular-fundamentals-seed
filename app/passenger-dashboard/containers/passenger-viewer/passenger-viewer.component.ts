import { Component, OnInit } from '@angular/core';
 
import { PassengerDashboardServices } from "../../passenger-dashboard.service";
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template:`
    <div>
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
  constructor(private passengerService: PassengerDashboardServices) {}

  ngOnInit() {
    this.passengerService
    .getPassenger(3)
    .subscribe( (data: Passenger) => this.passenger = data);
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
}