import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <ul>
    <app-simple-form 
    *ngFor="let message of mail.messages" 
    [message]="message"
    (update)="_onUpdate($event)"
    >
    </app-simple-form>
</ul>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bugaga!';

  constructor(@Inject('mail') private mail) {

  }

  _onUpdate(val) {
    console.log(val);
  }
}
