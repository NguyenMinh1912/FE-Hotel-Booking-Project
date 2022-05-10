import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth/auth.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.login({
      username: 'minhsama',
      password: 'minhsama',
    }).pipe(
      tap(console.log)
    )
      .subscribe()
  }

}
