import { Component, OnInit } from '@angular/core';
import { Injectable } from '../services/app.service';
import { AppService } from '../services/app.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pse = "";
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
   if(this.appService)
  	this.pse = this.appService.pseudo;
    if(this.pse=="root"){
      this.router.navigate(['']);
    }
  }
  onSignOut() {
    this.appService.signOut();
    this.router.navigate(['']);
  }

  allUsers(){
    this.appService.getUser();
  }
}
