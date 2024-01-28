import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherMapSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: WeatherMapSearchComponent;
  let fixture: ComponentFixture<WeatherMapSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMapSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherMapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
