import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
