import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name = signal('');
  age = signal(0);
  id = signal(0);
  constructor(public router: ActivatedRoute) {}
  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      console.log(params);
      this.name.set(params['name']);
      this.age.set(params['age']);
      this.id.set(params['id']);
    });
  }
}
