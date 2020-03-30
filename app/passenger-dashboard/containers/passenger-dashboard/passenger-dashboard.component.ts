import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import passengerList from './list';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
  passengerList: Passenger[];
  defaultTitle: string = 'Angular Project';
  title: string;
  constructor() {
    this.title = this.defaultTitle;
  }
  ngOnInit() {
    console.log('This is a lifecycle hook');
    this.passengerList = passengerList
  }
  handleImput(event:any) {
    this.title = event.target.value;
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
}