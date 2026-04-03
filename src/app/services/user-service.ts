import { Injectable } from '@angular/core';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userDetails = [
    { name: 'Sam', gender: 'Male', age: 25, id: 1, city: 'New York', email: 'sam@example.com' },
    { name: 'Bob', gender: 'Male', age: 30, id: 2, city: 'Los Angeles', email: 'bob@example.com' },
    { name: 'Alice', gender: 'Female', age: 28, id: 3, city: 'Chicago', email: 'alice@example.com' },
    { name: 'Eve', gender: 'Female', age: 32, id: 4, city: 'Houston', email: 'eve@example.com' },
    { name: 'Tom', gender: 'Male', age: 27, id: 5, city: 'Miami', email: 'tom@example.com' },
    { name: 'Sara', gender: 'Female', age: 31, id: 6, city: 'San Francisco', email: 'sara@example.com' },
    { name: 'Mike', gender: 'Male', age: 29, id: 7, city: 'Seattle', email: 'mike@example.com' },
    { name: 'Lisa', gender: 'Female', age: 26, id: 8, city: 'Boston', email: 'lisa@example.com' },
    { name: 'John', gender: 'Male', age: 33, id: 9, city: 'Denver', email: 'john@example.com' }
  ];
}
