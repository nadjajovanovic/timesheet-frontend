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
import { ProjectComponent } from './components/project/project.component';
import { ProjectService } from './services/project.service';
import { ReportService } from './services/report.service';
import { ReportComponent } from './components/report/report.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CategoryComponent,
    TeamMemberComponent,
    ProjectComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  entryComponents: [ClientsComponent],
  providers: [CountryService, ClientService, CategoryService, TeamMemberService, ProjectService, ReportService, { provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
