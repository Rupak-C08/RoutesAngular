import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {

  @Input() message = '';
  @Input() userName = '';

  @Output() onGreet = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<void>();

  sendGreeting() {
    this.onGreet.emit(`Greeting sent to ${this.userName}`);
  }

  close() {
    this.onClose.emit();
  }

}
