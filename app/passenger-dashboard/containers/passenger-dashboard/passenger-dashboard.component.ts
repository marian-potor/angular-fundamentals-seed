import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardServices} from "../../passenger-dashboard.service";
// import passengerList from './list';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
  passengerList: Passenger[];
  defaultTitle: string = 'Angular Project';
  title: string;
  constructor(private passengerService: PassengerDashboardServices) { //inject service as private pS
    // this is wat is happening in constructor(..): this.passengerService = PassengerDashboardServices; 
    this.title = this.defaultTitle;
  }
  ngOnInit() {
    console.log('This is a lifecycle hook');
    // this.passengerList = this.passengerService.getPassengers(); - without http request

    //our component has a service injected -PassengerDashboardServices- =>
    // => we make the call getPassengers => we subscribe to the call =>
    // => we bind to the result of the call -this.passengerList = data
    this.passengerService
    .getPassengers()
    .subscribe((data: Passenger[]) => this.passengerList = data);
  }

  handleImput(event: string) {
    this.title = event;
    console.log(event);
  }
  handleClick() {
    this.title = 'Angular Project'
  }
  handleChange(value: string) {
    this.title = value;
  }
  getValue(value: string) {
    console.log(value);   
  }

  //code version for making a delete request with observables
  // removePassenger(event: Passenger) {
  //   this.passengerService
  //   .removePassenger(event)
  //   .subscribe((data: Passenger) => {
  //   this.passengerList = this.passengerList.filter((passenger: Passenger) => passenger.id !== event.id);
  //   })
  // }

  //code version for making a delete request with promise
  removePassenger(event: Passenger) {
    this.passengerService
    .removePassenger(event)
    .then((data: Passenger) => {
    this.passengerList = this.passengerList.filter((passenger: Passenger) => passenger.id !== event.id);
    })
  }

  editPassenger(event:Passenger) {
    this.passengerService
    .updatePassenger(event) //call is beeing made
    .subscribe((data: Passenger) => { //subscribe to the call and if succesfull the local state is updated too.
      this.passengerList = this.passengerList.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event); //modified passenger is updated 
        }
        return passenger;
      });
    })

  }
}