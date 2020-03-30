import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template:`
    <div>
      Passengers checked-in: {{checkedInCount()}}/{{items.length}}
    </div>
  `
})

export class PassengerCountComponent {
  @Input() //we use input to tell the component to expect props, in this case items
  items: Passenger[]
  checkedInCount(): number {
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

}