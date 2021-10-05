import { Component, Inject, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Project } from 'src/app/models/project';
import { TeamMember } from 'src/app/models/team-member';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  teamMembers: TeamMember[] = [];
  clients: Client[] = [];

  constructor(private projectService : ProjectService,
    @Inject(Project) public data: Project) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  public addProject() {
    this.projectService.addProject(this.data);
  }

  public updateProject() : void {
    this.projectService.editProject(this.data);
  }

  public deleteProject() : void {
    this.projectService.deleteProject(this.data.projectid);
  }

}
