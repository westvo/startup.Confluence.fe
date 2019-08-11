import { ObjectModel } from './../models/objectModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectApi } from '../api/object.api'
import { BehaviorSubject } from 'rxjs';
import { Helper } from '../helper';
@Injectable({
    providedIn: 'root'
})

export class ObjectService {

    constructor(private http: HttpClient) {
    }

    getObject() {
        return this.http.get(ObjectApi.OBJECT, { headers: Helper.SetHeaderAuth() });
    }

    addObject(object: ObjectModel) {
        return this.http.post(ObjectApi.OBJECT, object, { headers: Helper.SetHeaderAuth() });
    }

    editObject(_id :String, object: ObjectModel) {
        return this.http.put(ObjectApi.OBJECT+`/${_id}`, object, { headers: Helper.SetHeaderAuth() });
    }

    deleteObject(_id :String){
        return this.http.delete(ObjectApi.OBJECT+`/${_id}`, { headers: Helper.SetHeaderAuth() });
    }
}
