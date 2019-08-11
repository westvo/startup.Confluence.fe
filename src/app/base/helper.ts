import {HttpHeaders, HttpParams} from '@angular/common/http';

export class Helper {

  constructor() {
  }

  public static JSON_to_URLEncoded(element: any, key?: any, list?: any) {
    console.log(element);

    var list = list || [];
    if (typeof (element) == 'object') {
      for (var idx in element)
        this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
    } else {
      list.push(key + '=' + encodeURIComponent(element));
    }
    return list.join('&');
  }

  public static SetHeaderAuth() {
    var token = localStorage.getItem('auth');
    console.log(token);
    if(token==null) return null;
    let headers = new HttpHeaders();
    headers = headers.append('x-access-token', token);
    headers = headers.append('Content-Type', 'application/json');
    return headers;

  } 
}
