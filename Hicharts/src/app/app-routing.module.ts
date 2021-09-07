import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from "./hello.component";
import {WeatherForecastComponent} from "./weather-forecast.component";

const routes: Routes = [
  { path: "hello", component: HelloComponent},
  { path: "weather", component: WeatherForecastComponent},
  {path: "", redirectTo: "/hello", pathMatch: "full"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
