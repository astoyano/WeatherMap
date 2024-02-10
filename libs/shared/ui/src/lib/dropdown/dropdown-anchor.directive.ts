import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dropdownAnchor]'
})
export class WeatherMapDropdownAnchorDirective {
  constructor(
    private _elementRef: ElementRef,
    public templateRef: TemplateRef<unknown>
  ) {
  }
}
