import {Component, OnInit} from '@angular/core';
import {AuthService} from "../core/services/auth/auth.service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const isLogin = this.authService.isLogin();
    if (!isLogin) {
      this.router.navigate(['/login'])
    }
  }


}
