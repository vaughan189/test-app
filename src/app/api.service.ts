import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = './assets/projects.json';

  constructor(private http: Http) { }


  public getJSON(): Observable<any> {
    return this.http.get(this.baseUrl)
    .pipe(map((response: any) => response.json()));

}
}
