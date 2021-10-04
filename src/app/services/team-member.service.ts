import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TeamMember } from "../models/team-member";

@Injectable()
export class TeamMemberService {
    private readonly teamMemberUrl = 'http://localhost:8083/teammember';

    constructor(private httpClient: HttpClient) {

    }

    public getAllTeamMembers() : Observable<TeamMember[]> {
        return this.httpClient.get<TeamMember[]>(this.teamMemberUrl);
    }

    public addTeamMember(teamMember: TeamMember) : void {
        this.httpClient.post(this.teamMemberUrl, teamMember);
    }

    public editTeamMember(teamMember : TeamMember) : void {
        this.httpClient.put(this.teamMemberUrl, teamMember);
    }

    public deleteTeamMember(teammemberid: number) {
        this.httpClient.delete(this.teamMemberUrl + teammemberid);
    }

}