import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}
  userDetail = signal({ name: 'Sam', age: 25, id: 1 });
  goToProfile() {
    this.router.navigate(['/profile'], {
      queryParams: { name: 'ABC', age: 28, id: 0 },
    });
  }
  goToAbout() {
    this.router.navigate(['/about', { name: 'Raja', age: 31 }]);
  } 
}