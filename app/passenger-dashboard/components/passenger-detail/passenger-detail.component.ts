import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
          <div *ngIf="editing">
            <input type="text" [value]="detail.name" (input)="onNameChange(name.value)" #name>
          </div>
          <div *ngIf="!editing">
            {{detail.id}}: {{detail.name}}
          </div>
          <div>
            <!-- using angular pipes -->
            Check-in date: {{detail.checkedIn ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked-in'}}
          </div>
          <div>
            Children: {{detail.children?.length || 0}}
            <!--  ?-safe navigation operator-->
          </div>
          <button (click)="toggleEditing()">{{ editing ? "Save" : "Edit" }}</button>
          <button (click)="onRemove()">Remove</button>
          <button (click)="goToPassenger()">View</button>
        </li>
      </ul>
    </div>
  `
})

export class PassengerDetailComponent implements OnChanges{
  @Input()  
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {}

  ngOnChanges(changes: any) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }

  editing: boolean = false;
  toggleEditing():void {
    if (this.editing) {
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }
  onNameChange(name: string): void {
    this.detail.name = name;
  }
  onRemove(): void {
    this.remove.emit(this.detail);
  }
  goToPassenger(): void {
    this.view.emit(this.detail);
  }
}