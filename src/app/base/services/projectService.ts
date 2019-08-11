import { ProjectModel } from './../models/projectModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectApi } from '../api/project.api'
import { BehaviorSubject } from 'rxjs';
import { Helper } from '../helper';
@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    constructor(private http: HttpClient) {
    }

    getProject() {
        return this.http.get(ProjectApi.PROJECT, { headers: Helper.SetHeaderAuth() });
    }

    addProject(project: ProjectModel) {
        return this.http.post(ProjectApi.PROJECT, project, { headers: Helper.SetHeaderAuth() });
    }

    editProject(_id :String, project: ProjectModel) {
        return this.http.put(ProjectApi.PROJECT+`/${_id}`, project, { headers: Helper.SetHeaderAuth() });
    }

    deleteProject(_id :String){
        return this.http.delete(ProjectApi.PROJECT+`/${_id}`, { headers: Helper.SetHeaderAuth() });
    }

    addUser(id : string, users: any){
        return this.http.post(`${ProjectApi.ADDUSER}/${id}`,{ ids :users}, { headers: Helper.SetHeaderAuth() })
    }
}
