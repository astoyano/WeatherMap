import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dropdownContent]'
})
export class WeatherMapDropdownContentDirective {
  constructor(private _elementRef: ElementRef,
    public templateRef: TemplateRef<unknown>) {}
}
