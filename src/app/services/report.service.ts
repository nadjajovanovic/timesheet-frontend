import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Report } from "../models/report";

@Injectable()
export class ReportService {

    private readonly reportUrl = 'http://localhost:8083/project';

    constructor(private httpClient : HttpClient ) {

    }

    public getAllReports() : Observable<Report[]>{
        return this.httpClient.get<Report[]>(this.reportUrl);
    }

    public addReport(report : Report) : void{
        this.httpClient.post(this.reportUrl, report);
    }

    public editReport(report: Report) : void {
        this.httpClient.put(this.reportUrl, report);
    }

    public deleteReport(reportid : number) :  void {
        this.httpClient.delete(this.reportUrl + reportid);
    }

}