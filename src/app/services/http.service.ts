import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  todoData = [];
  user = {};
  constructor(private _http: Http) { }

  getData(url): Observable<any> {
    return this._http.get(url);
  }
  getDataWithParams(url, id): Observable<any> {
    return this._http.get(url + id);
  }
  postData(url, req): Observable<any> {
    return this._http.put(url, req);
  }
  deleteData(url, req): Observable<any> {
    return this._http.delete(url, req);
  }
  createData(url, req): Observable<any> {
    return this._http.post(url, req);
  }
}
