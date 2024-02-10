import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'weather-map-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class WeatherMapInputComponent {
  @Input() id: string = 'weather-map-input';
  @Input() placeholder: string = 'placehoder';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label: string = '';
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onInputBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onInputFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

  inputValueChangeHandler(value: string): void {
    this.valueChange.emit(value);
  }

  focusHandler(event: FocusEvent): void {
    this.onInputFocus.emit(event);
  }

  blurHandler(event: FocusEvent): void {
    this.onInputBlur.emit(event);
  }
}
