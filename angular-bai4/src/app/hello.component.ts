import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  ngOnInit() {
    console.log('Hello init');
  }

  ngOnDestroy() {
    console.log('Hello destroy');
  }
}
