import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<any>> {
    return  of([
      {"location":"Oslo","date":"2021-09-10T13:44:38.353808-07:00","temperatureC":-15,"temperatureF":6,"summary":"Warm"},
      {"location":"Stockholm","date":"2021-09-11T13:44:38.3538145-07:00","temperatureC":-3,"temperatureF":27,"summary":"Hot"},
      {"location":"Riga","date":"2021-09-12T13:44:38.3538145-07:00","temperatureC":4,"temperatureF":39,"summary":"Scorching"},
      {"location":"Tallinn","date":"2021-09-13T13:44:38.353815-07:00","temperatureC":15,"temperatureF":58,"summary":"Hot"},
      {"location":"Helsinki","date":"2021-09-14T13:44:38.3538155-07:00","temperatureC":21,"temperatureF":69,"summary":"Hot"}]);
  }

  getServerData(): Observable<Array<any>> {
    return this.http.get<any[]>(`https://polk-api.atimsonline.com/WeatherForecast/`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })});
  }
}
