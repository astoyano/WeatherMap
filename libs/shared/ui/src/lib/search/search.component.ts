import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import { WeatherMapInputComponent } from '../input/input.component';
import { WeatherMapDropdownModule } from '../dropdown/index';

@Component({
  selector: 'weather-map-search',
  standalone: true,
  imports: [CommonModule, OverlayModule, WeatherMapInputComponent, WeatherMapDropdownModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class WeatherMapSearchComponent {
  data: string[] = ['item 1', 'item2', 'item3'];
  searchedData: string[] = [];
  searchValue: string = '';
  openDropdown: boolean = false;

  valueChangeHandler(): void {
    this.searchedData = this.data.filter(data => data.includes(this.searchValue));
  }

  searchFieldFocusHandler(): void {
    this.openDropdown = true;
  }

  searchFieldBlurHandler(): void {
    this.openDropdown = false;
  }
}
