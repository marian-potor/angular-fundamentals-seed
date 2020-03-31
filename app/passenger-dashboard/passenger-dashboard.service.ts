import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; //tools for custom headers
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //add properties to observables
import 'rxjs/add/operator/toPromise'; //we can make requests with promises not observables
import 'rxjs/add/operator/catch'; //for error handling
import 'rxjs/add/observable/throw'; //for error handling
import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardServices {
  constructor(private http: Http ) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http
    .get(PASSENGER_API)
    .map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      'content-type': 'aplication/json'
    }) // create header
    let options = new RequestOptions({
      headers: headers
    }) //create options that contain the headers
    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`, passenger/*, options*/) 
    //send custom headers by adding param.'options'
    //warning: addin options in this case screws up the db.json
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json())); //throws error if request fails
  }

  //delete request with observables
  // removePassenger(passenger: Passenger): Observable<Passenger> {
  //   return this.http
  //   .delete(`${PASSENGER_API}/${passenger.id}`)
  //   .map((response: Response) => response.json());
  // }

  //delete request with promise
  removePassenger(passenger: Passenger): Promise<Passenger> {
    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`)
    .toPromise()
    .then((response: Response) => response.json());
  }
}