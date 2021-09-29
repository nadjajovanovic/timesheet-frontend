import { Country } from "./country";

export class Client {
    clientid: number;
    clientname: string;
    clientaddress: string;
    clientcity: string;
    clientzipcode: string;
    country: Country;

    constructor(clientid: number, 
        clientname: string, clientaddress: string, 
        clientcity: string, clientzipcode: string,  country: Country) {
        this.clientid = clientid;
        this.clientname = clientname;
        this.clientaddress = clientaddress;
        this.clientcity = clientcity;
        this.clientzipcode = clientzipcode;
        this.country = country;
    }
}