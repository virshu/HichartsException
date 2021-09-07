import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get<any[]>(`http://localhost:57432/${url}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })});
  }
}
