import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'weather-map-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class WeatherMapInputComponent implements OnInit, OnChanges {
  @Input() id: string = 'weather-map-input';
  @Input() placeholder: string = 'placehoder';
  @Input() value: string = '';
  @Input() validators: ValidatorFn | ValidatorFn[] | null = null;
  @Input() name: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label: string = '';
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onInputBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onInputFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

  private _controlValue!: FormControl;
  private _destroyRef = inject(DestroyRef);

  get controlValue(): FormControl {
    return this._controlValue;
  }

  ngOnInit(): void {
    this._controlValue = new FormControl(this.value, this.validators);

    this._controlValue.valueChanges
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe(() => {
      this.valueChange.emit(this._controlValue.value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._controlValue) {
      if (changes['validator'] && changes['validator'].currentValue !== changes['validator'].previousValue) {
        this._controlValue.setValidators(this.validators);
      }

      if (changes['value'] && this._controlValue.value !== changes['value'].currentValue) {
        this._controlValue.setValue(this.value);
      }
    }
  }

  focusHandler(event: FocusEvent): void {
    this.onInputFocus.emit(event);
  }

  blurHandler(event: FocusEvent): void {
    this.onInputBlur.emit(event);
  }
}
