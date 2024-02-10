import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherMapDropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: WeatherMapDropdownComponent;
  let fixture: ComponentFixture<WeatherMapDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMapDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherMapDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
