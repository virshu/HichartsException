import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  templateUrl: './weather-forecast.component.html'
})
export class WeatherForecastComponent implements OnInit {
  highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: "Weather"
    },
    subtitle: {
      text: "Scandinavia and Baltic Capitals"
    }
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.http.get<any[]>(`http://localhost:57432/WeatherForecast`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })})
      .subscribe(result => {
        let categories: string[] = [];
        let dataSeries: number[] = [];
        for (let i = 0; i < result.length; i++) {
          categories.push(result[i]['location']);
          dataSeries.push(result[i]['temperatureC']);
        }
        this.chartOptions.xAxis = {
          categories: categories
        };
        this.chartOptions.series = [{
          type: "column",
          name: "Cities",
          data: dataSeries
        }];
        this.highcharts.chart('container', this.chartOptions);
      }, error => {
        console.log(error);
      });
  }

}
