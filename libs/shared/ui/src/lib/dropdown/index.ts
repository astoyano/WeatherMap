import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WeatherMapDropdownAnchorDirective } from "./dropdown-anchor.directive";
import { WeatherMapDropdownContentDirective } from "./dropdown-content.directive";
import { WeatherMapDropdownComponent } from "./dropdown.component";

@NgModule({
    imports: [CommonModule, OverlayModule],
    declarations: [
        WeatherMapDropdownComponent,
        WeatherMapDropdownAnchorDirective,
        WeatherMapDropdownContentDirective
    ],
    exports: [
        WeatherMapDropdownComponent,
        WeatherMapDropdownAnchorDirective,
        WeatherMapDropdownContentDirective
    ]
  })
  export class WeatherMapDropdownModule {}