import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div 
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
     <div
        class="progress"
          [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container
      .progress {
        height: 20px;
      }    
      .progress-bar-container {
        width: 100%
      }
    `,
  ],
})
export class ProgressBarComponent {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
}
