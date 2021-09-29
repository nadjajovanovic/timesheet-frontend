import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client";

@Injectable()
export class ClientService {
    private readonly clientUrl = 'http://localhost:8083/client';

    constructor(private httpClient: HttpClient) {

    }

    public getAllClients() : Observable<Client[]> {
        return this.httpClient.get<Client[]>(this.clientUrl);
    }

    public addClient(client: Client) : void {
        this.httpClient.post(this.clientUrl, client);
    }

    public editClient(client : Client) : void {
        this.httpClient.put(this.clientUrl, client);
    }

    public deleteClient(clientid: number) {
        this.httpClient.delete(this.clientUrl + clientid);
    }
}