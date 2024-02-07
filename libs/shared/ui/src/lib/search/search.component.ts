import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import { WeatherMapInputComponent } from '../input/input.component';

@Component({
  selector: 'weather-map-search',
  standalone: true,
  imports: [CommonModule, OverlayModule, WeatherMapInputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class WeatherMapSearchComponent {
  data: string[] = ['item 1', 'item2', 'item3'];
  searchedData: string[] = [];
  searchValue: string = '';
  isOpen: boolean = false;

  valueChangeHandler(): void {
    this.searchedData = this.data.filter(data => data.includes(this.searchValue));

    this.isOpen = !!this.searchedData.length;
  }
}
