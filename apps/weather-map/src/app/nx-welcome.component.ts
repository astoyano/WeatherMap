import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMapInputComponent } from '@weather-map-monorepo/shared-ui';

@Component({
  selector: 'weather-map-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, WeatherMapInputComponent],
  template: `
<weather-map-input [(value)]="myValue"></weather-map-input>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  myValue = 'My value'
}
