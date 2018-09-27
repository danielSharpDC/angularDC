import { Component, OnInit } from '@angular/core';
import { Injectable } from '../services/app.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pse = "Muriel";
  constructor(private appService: AppService) { }

  ngOnInit() {
  	this.pse = this.appService.pseudo;
  }
}
