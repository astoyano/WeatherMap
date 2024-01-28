import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMapSearchComponent } from '@weather-map-monorepo/shared-ui';

@Component({
  selector: 'weather-map-header',
  standalone: true,
  imports: [CommonModule, WeatherMapSearchComponent],
  templateUrl: './weather-map-header.component.html',
  styleUrl: './weather-map-header.component.scss',
})
export class WeatherMapHeaderComponent {}
