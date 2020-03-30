import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template:`
    <div>
      <ul>
        <li>
          <!-- <span class="status" [style.backgroundColor]="detail.checkedIn?'green':'blue'"></span> -->
          <!-- equivalent to element.style.backgroundColor -->
          <!-- or -->
          <span class="status" [ngStyle]="{'backgroundColor': detail.checkedIn?'green':'blue'}"></span>
            {{detail.id}}: {{detail.name}}
          <div>
            <!-- using angular pipes -->
            Check-in date: {{detail.checkedIn ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked-in'}}
          </div>
          <div>
            Children: {{detail.children?.length || 0}}
            <!--  ?-safe navigation operator-->
          </div>
        </li>
      </ul>
    </div>
  `
})

export class PassengerDetailComponent {
@Input()  
detail: Passenger;
// index: number;
}