import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherMapInputComponent } from './input.component';

describe('SharedUiComponent', () => {
  let component: WeatherMapInputComponent;
  let fixture: ComponentFixture<WeatherMapInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMapInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherMapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
