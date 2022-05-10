import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import { UserLoginComponent } from './user-login/user-login.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "../../core/services/auth/auth.service";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent
      }
    ]
  },

];



@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
