import { Component, Inject, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Country } from 'src/app/models/country';
import { ClientService } from 'src/app/services/client.service';
import * as $ from 'jquery';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  countries : Country[] = [];

  constructor(private clientService: ClientService,
    private countryService : CountryService) { }


  ngOnInit(): void {
    this.getClients();
    this.countryService.getAllCountries().subscribe(countries =>
      this.countries = countries
    );
  }

  public getClients() : void {
    this.clientService.getAllClients().subscribe(clients => {
      this.clients = clients;

      $(document).ready(function () {
        var heading = '.accordion-wrap .heading';
      
        $(heading).click(function () {
          if (!$(this).parent().hasClass('open')) {
            $(this).parent().addClass('open');
            $(this).next().slideDown('normal');
          } else {
            $(this).parent().removeClass('open');
            $(this).next().slideUp('normal');
          }
        });
      });
    
    });
  }


  
}

