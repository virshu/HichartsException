import {Component, OnInit} from '@angular/core';
import * as Highcharts from "highcharts";
import {DataService} from "./data.service";

@Component({
  templateUrl: './weather-forecast.component.html'
})
export class WeatherForecastComponent implements OnInit {
  highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  oneToOne = true;
  chartOptions: Highcharts.Options = {
    title: {
      text: "Weather"
    },
    subtitle: {
      text: "Scandinavia and Baltic Capitals"
    }
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
     this.dataService.getServerData().subscribe(result => {
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
        //this.highcharts.chart('container', this.chartOptions);
       this.updateFlag = true;
      }, error => {
        console.log(error);
      });
  }
}
