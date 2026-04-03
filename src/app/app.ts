import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef, ComponentRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Greeting } from './components/greeting/greeting';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  @ViewChild('dynamicHost', { read: ViewContainerRef }) 
  dynamicHost: ViewContainerRef | undefined;

  private componentRef: ComponentRef<Greeting> | undefined;

  ngAfterViewInit() {
    // Initialization logic after view is initialized
    if (!this.dynamicHost) return;
    // Create the component dynamically
    this.componentRef = this.dynamicHost.createComponent(Greeting);

    // Set inputs
    this.componentRef.setInput('message', 'Hello');
    this.componentRef.setInput('userName', 'Rupak');

    // Subscribe to outputs
    this.componentRef.instance.onGreet.subscribe((event: string) => {
      console.log(event);
    });

    this.componentRef.instance.onClose.subscribe(() => {
      console.log('Greeting component closed');
    });

  }
}
