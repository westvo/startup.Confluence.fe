import { ApiModel } from './../models/apiModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiApi } from '../api/api.api'
import { BehaviorSubject } from 'rxjs';
import { Helper } from '../helper';
@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) {
    }

    getApi() {
        return this.http.get(ApiApi.API, { headers: Helper.SetHeaderAuth() });
    }

    addApi(api: ApiModel) {
        return this.http.post(ApiApi.API, api, { headers: Helper.SetHeaderAuth() });
    }

    editApi(_id :String, api: ApiModel) {
        return this.http.put(ApiApi.API+`/${_id}`, api, { headers: Helper.SetHeaderAuth() });
    }

    deleteApi(_id :String){
        return this.http.delete(ApiApi.API+`/${_id}`, { headers: Helper.SetHeaderAuth() });
    }
}
