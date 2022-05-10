import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AppRoutingModule} from "../app-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
