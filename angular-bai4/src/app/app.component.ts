import { Component, VERSION } from '@angular/core';
import { hasOneOfTypes } from '@angular/core/schematics/utils/typescript/symbol';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  user = {
    name: 'Hao',
    age: 22,
  };
}
