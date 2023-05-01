import { Component } from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lon = ''
  lat = ''
  city = '';
  countryCode = '';
  weatherData: any = null;
  forecastData!: any[];
  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    this.getWeather();
    this.getForecastData();
  }
  getWeather() {
    this.weatherService.getWeather(this.city, this.countryCode)
      .subscribe((data) => {
        console.log(data); // Debugging purposes
        this.weatherData = data;
      });
  }
  getForecastData(): void {
    this.weatherService.getForecastData(this.city, this.countryCode)
      .subscribe(data => {
        console.log(data);
        this.forecastData = data;
      });
  }
}
