//used this file before creating json placeholder

import { Passenger } from '../../models/passenger.interface';

const passengerList: Passenger[] = [
    {
        id: 1,
        name: 'George',
        checkedIn: true,
        checkInDate: 1585563142050,
        children: null,
        baggage: ''
    },
    {
        id: 2,
        name: 'Andreea',
        checkedIn: false,
        checkInDate: null,
        children: null,
        baggage: ''
    },
    {
        id: 3,
        name: 'Ion',
        checkedIn: true,
        checkInDate: 1425563142050,
        children: [{name: 'Angelica', age:7}, {name: 'Bogdan', age: 12}],
        baggage: ''
    },
    {
        id: 4,
        name: 'Alina',
        checkedIn: true,
        checkInDate: 1581653142050,
        children: null,
        baggage: ''
    },
    {
        id: 5,
        name: 'Valentin',
        checkedIn: false,
        checkInDate: null,
        children: [{name: 'Patrick', age: 4}],
        baggage: ''
    },
];
export default passengerList;