import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Layout} from "./layout.type";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  layout: Layout;

  constructor(private _activatedRoute: ActivatedRoute) {
    console.log('helo');
    const param = this._activatedRoute.snapshot.data;
    console.log(param);
    if (param && param['layout']) {
      this.layout = param['layout'];
    } else {
      this.layout = 'empty';
    }
  }

  ngOnInit(): void {
  }
}
