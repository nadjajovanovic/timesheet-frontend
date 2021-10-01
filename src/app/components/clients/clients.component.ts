import { Component, Inject, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Country } from 'src/app/models/country';
import { ClientService } from 'src/app/services/client.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  countries: Country[] = [];

  constructor(private clientService: ClientService,
    @Inject(Client) public data: Client ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }

  public addClient() {
    this.clientService.addClient(this.data);
  }

  public updateCLient(): void {
    this.clientService.editClient(this.data);
  }

  public deleteClient(): void {
    this.clientService.deleteClient(this.data.clientid);
  }

}
