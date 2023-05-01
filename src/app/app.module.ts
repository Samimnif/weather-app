import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, FormsModule], // Add FormsModule to imports
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}