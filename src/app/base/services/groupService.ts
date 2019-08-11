import { GroupModel } from './../models/groupModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupApi } from '../api/group.api'
import { BehaviorSubject } from 'rxjs';
import { Helper } from '../helper';
@Injectable({
    providedIn: 'root'
})

export class GroupService {

    constructor(private http: HttpClient) {
    }

    getGroup() {
        return this.http.get(GroupApi.GROUP, { headers: Helper.SetHeaderAuth() });
    }

    addGroup(group: GroupModel) {
        return this.http.post(GroupApi.GROUP, group, { headers: Helper.SetHeaderAuth() });
    }

    editGroup(_id :String, group: GroupModel) {
        return this.http.put(GroupApi.GROUP+`/${_id}`, group, { headers: Helper.SetHeaderAuth() });
    }

    deleteGroup(_id :String){
        return this.http.delete(GroupApi.GROUP+`/${_id}`, { headers: Helper.SetHeaderAuth() });
    }
}
