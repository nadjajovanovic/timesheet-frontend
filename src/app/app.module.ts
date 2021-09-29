import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryService } from './services/category.service';
import { ClientService } from './services/client.service';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountryService, ClientService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
