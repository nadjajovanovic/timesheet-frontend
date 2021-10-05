import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
    private readonly projectUrl = 'http://localhost:8083/project';

    constructor (private httpClient: HttpClient) {

    }

    public getAllProjects() : Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.projectUrl);
    }

    public addProject(project: Project): void {
        this.httpClient.post(this.projectUrl, project);
    }

    public editProject(project: Project) : void {
        this.httpClient.post(this.projectUrl, project);
    }

    public deleteProject(projectid: number) {
        this.httpClient.delete(this.projectUrl + projectid);
    }

}