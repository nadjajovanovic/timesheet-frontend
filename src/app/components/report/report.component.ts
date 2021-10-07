import { Component, Inject, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Client } from 'src/app/models/client';
import { Project } from 'src/app/models/project';
import { Report } from 'src/app/models/report';
import { TeamMember } from 'src/app/models/team-member';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports: Report[] = [];
  categories: Category[] = [];
  teamMembers: TeamMember[] = [];
  clients: Client[] = [];
  pojects: Project[] =[];

  constructor(private reportService : ReportService,
    @Inject(Report) public data: Report) { }

  ngOnInit(): void {
    this.reportService.getAllReports().subscribe(data => {
      this.reports = data;
    });
  }

  public addReport() {
    this.reportService.addReport(this.data);
  }

  public updateReport() : void {
    this.reportService.editReport(this.data);
  }

  public deleteReport() : void {
    this.reportService.deleteReport(this.data.reportid);
  }

}
