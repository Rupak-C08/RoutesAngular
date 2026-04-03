import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users = signal<any[]>([]);
  constructor(public userService: UserService) {}
  ngOnInit() {
    this.users.set(this.userService.userDetails);
  }
}
