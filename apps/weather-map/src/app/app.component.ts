import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherMapHeaderComponent } from './weather-map-header/weather-map-header.component';

@Component({
  standalone: true,
  imports: [RouterModule, WeatherMapHeaderComponent],
  selector: 'weather-map-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-map';
}
