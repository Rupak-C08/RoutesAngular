import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  constructor(public router: ActivatedRoute, public userService: UserService) {}
  userDetail = signal<any>({});
  ngOnInit() {
    this.router.params.subscribe((params) => {
      const userId = params['id'];
      const user = this.userService.userDetails.filter((user) => user.id === +userId)[0];
      this.userDetail.set(user);
    });
  }
}
