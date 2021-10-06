import { Category } from "./category";
import { Client } from "./client";
import { Project } from "./project";
import { TeamMember } from "./team-member";

export class Report {
    reportid: number;
    teammember: TeamMember;
    category: Category;
    client: Client;
    startdate: Date;
    project: Project;
    enddate: Date;

    constructor(reportid: number,
        teammember: TeamMember,
        category: Category,
        client: Client,
        startdate: Date,
        project: Project,
        enddate: Date,) {
            this.reportid = reportid;
            this.teammember = teammember;
            this.category = category;
            this.client = client;
            this.startdate = startdate;
            this.project = project;
            this.enddate = enddate;
        }
}