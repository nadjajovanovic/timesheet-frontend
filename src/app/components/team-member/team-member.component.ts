import { Component, Inject, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';
import { TeamMemberService } from 'src/app/services/team-member.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  
  constructor(private teamMemberService: TeamMemberService,
    @Inject(TeamMember) public data: TeamMember) { }

  ngOnInit(): void {
    this.teamMemberService.getAllTeamMembers().subscribe(data => {
      this.teamMembers = data
    });
  }

  public addTeamMember(): void {
    this.teamMemberService.addTeamMember(this.data);
  }

  public updateTeamMember(): void {
    this.teamMemberService.editTeamMember(this.data);
  }

  public deleteTeamMember(): void {
    this.teamMemberService.deleteTeamMember(this.data.teammemberid);
  }

}
