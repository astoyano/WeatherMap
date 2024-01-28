import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMapInputComponent } from '../input/input.component';

@Component({
  selector: 'weather-map-search',
  standalone: true,
  imports: [CommonModule, WeatherMapInputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class WeatherMapSearchComponent {
  searchValue: string = '';
}
