import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryService } from './services/category.service';
import { ClientService } from './services/client.service';
import { CountryService } from './services/country.service';
import { ClientsComponent } from './components/clients/clients.component';
import { CategoryComponent } from './components/category/category.component';
import { RouterModule } from '@angular/router';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { TeamMemberService } from './services/team-member.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CategoryComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CountryService, ClientService, CategoryService, TeamMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
