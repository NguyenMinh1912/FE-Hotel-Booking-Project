import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AppRoutingModule} from "../app-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NzContentComponent, NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {RouterModule, Routes} from "@angular/router";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProtectedLayoutComponent } from './protected-layout/protected-layout.component';
import {NzIconModule} from "ng-zorro-antd/icon";

const routes: Routes = [{ path: 'room', loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule) }

];

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    ProtectedLayoutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
