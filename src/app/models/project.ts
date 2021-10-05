import { Client } from "./client";
import { TeamMember } from "./team-member";

export class Project {
    projectid: number;
    projectname: String;
    projectdescription: String;
    teammember: TeamMember;
    client: Client;

    constructor(projectid: number, 
        projectname: String,
        projectdescription: String,
        teammember: TeamMember,
        client: Client) {
            this.projectid = projectid;
            this.projectname = projectname;
            this.projectdescription = projectdescription;
            this.teammember = teammember;
            this.client = client;
        }

}