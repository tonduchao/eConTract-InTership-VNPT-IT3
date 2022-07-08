import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // Data binding
  // event binding

  user = {
    name: 'Hao',
    age: 22,
  };

  handler(event) {
    console.log('clicked', event);
  }
}
