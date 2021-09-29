import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from "../models/country";


@Injectable()
export class CountryService {

    private readonly countryUrl = 'http://localhost:8083/country';

    constructor(private httpClient: HttpClient) {
    }

    public getAllCountries(): Observable<Country[]> {
        return this.httpClient.get<Country[]>(this.countryUrl);
    }

    public addCountry(country : Country) : void {
        this.httpClient.post(this.countryUrl, country);
    }

    public editCountry(country : Country) : void {
        this.httpClient.put(this.countryUrl, country);
    }

    public deleteCountry(countryid: number): void {
        this.httpClient.delete(this.countryUrl + countryid);
    }
}


