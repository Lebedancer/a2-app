import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input #myInput type="text" [(ngModel)]="message.text">
    <button (click)="_onClick()">Click me</button>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() { }

  _onClick(value) {
    this.update.emit({text: this.message.text})
  }

  ngOnInit() {
  }

}
