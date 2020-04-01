import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: "passenger-form",
  styleUrls: ['passenger-form.component.scss'],
  templateUrl: 'passenger-form.component.html'
})

export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  status: boolean;
  baggage: Baggage[] = [{
      key: "none",
      value: "No baggage"
    },{
      key: "hand-only",
      value: "Hand baggage"
    },{
      key: "hold-only",
      value: "Hold baggage"
    },{
      key: "hand-hold",
      value: "Hand and hold baggage"
    }];

  toggleCheckedIn(checkedIn: boolean): void {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
      this.status = true;
      return;
    }
    this.status = false;
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}