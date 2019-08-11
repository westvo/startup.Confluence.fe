import { AttributeModel } from './../models/attributeModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AttributeApi } from '../api/attribute.api'
import { BehaviorSubject } from 'rxjs';
import { Helper } from '../helper';
@Injectable({
    providedIn: 'root'
})

export class AttributeService {

    constructor(private http: HttpClient) {
    }

    getAttribute() {
        return this.http.get(AttributeApi.ATTRIBUTE, { headers: Helper.SetHeaderAuth() });
    }

    addAttribute(attribute: AttributeModel) {
        return this.http.post(AttributeApi.ATTRIBUTE, attribute, { headers: Helper.SetHeaderAuth() });
    }

    editAttribute(_id :String, attribute: AttributeModel) {
        return this.http.put(AttributeApi.ATTRIBUTE+`/${_id}`, attribute, { headers: Helper.SetHeaderAuth() });
    }

    deleteAttribute(_id :String){
        return this.http.delete(AttributeApi.ATTRIBUTE+`/${_id}`, { headers: Helper.SetHeaderAuth() });
    }
}
