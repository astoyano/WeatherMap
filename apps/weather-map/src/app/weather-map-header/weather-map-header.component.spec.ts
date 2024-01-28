import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherMapHeaderComponent } from './weather-map-header.component';

describe('WeatherMapHeaderComponent', () => {
  let component: WeatherMapHeaderComponent;
  let fixture: ComponentFixture<WeatherMapHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMapHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherMapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
