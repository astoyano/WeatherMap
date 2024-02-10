import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { WeatherMapDropdownAnchorDirective } from './dropdown-anchor.directive';
import { WeatherMapDropdownContentDirective } from './dropdown-content.directive';

@Component({
  selector: 'weather-map-dropdown',
  standalone: false,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WeatherMapDropdownComponent {
  isOpen: boolean = false;
  connectedOrigin!: CdkOverlayOrigin;

  @Input() closeOnClick: boolean = true;
  @Input() set openDropdown(value: boolean) {
    this.isOpen = value;
  }

  @ContentChild(WeatherMapDropdownAnchorDirective) dropdownAnchorDirective!: WeatherMapDropdownAnchorDirective;
  @ContentChild(WeatherMapDropdownContentDirective) dropdownContentDirective!: WeatherMapDropdownContentDirective;

  @Output() dropdownClick: EventEmitter<MouseEvent> =  new EventEmitter<MouseEvent>();

  dropdownClickHandler(event: MouseEvent): void {
    if (this.closeOnClick) {
      this.isOpen = false;
    }

    this.dropdownClick.emit(event);
  }
}
