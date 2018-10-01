import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { RouterModule, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cPseudo = true;
  cPass = true;
  cEmail = true;
  login = false;
  pseu = "";
  mdp = "";
  email = "";
  nam = ""
  ht = 500;
  sUp = false;
  authStatus: boolean;

  getHeight(){
    var h=window.innerHeight;
    return (h-110)+"px"; 
  }

  vPseudo(){
    var obj=document.querySelector("#pse");
    if(obj.value.length>2){
      this.cPseudo=true;
      this.pseu=obj.value;
      obj.style.color="green";
      obj.style.borderColor="green";
    }else{
      this.cPseudo=false;
      obj.style.color="red";
      obj.style.borderColor="red";
    }
  }

  vEmail(){
    var obj=document.querySelector("#ema");
    if(obj.value.length>2){
      this.cEmail=true;
      this.email=obj.value;
      obj.style.color="green";
      obj.style.borderColor="green";
    }else{
      this.cEmail=false;
      obj.style.color="red";
      obj.style.borderColor="red";
    }
  }
  vName(){
    var obj=document.querySelector("#nam");
    if(obj.value.length>2){
      this.nam=obj.value;
      obj.style.color="green";
      obj.style.borderColor="green";
    }else{
      obj.style.color="red";
      obj.style.borderColor="red";
    }
  }

  vPass(){
    var ob=document.querySelector("#pas");
    if(ob.value.length>4){
      this.cPass=true;
      this.mdp=ob.value;
      ob.style.color="green";
      ob.style.borderColor="green";
    }else{
      this.cPass=false;
      ob.style.color="red";
      ob.style.borderColor="red";
    }
  }

  sendForm(){
    setTimeout(()=>{
      if(this.cPseudo&&this.cPass){
      this.login=true;
    }
  }, 2000); 
  }


  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    setInterval(()=>{
      this.appService.pseudo = this.pseu;
      this.appService.mdp = this.mdp;
      this.appService.email = this.email;
      this.appService.nam = this.nam;
      this.ht=this.getHeight();
    }, 1000);
   this.authStatus = this.appService.isAuth;
  }

  /*tryRegister() {
    this.appService.doRegister(this.pseu, this.mdp).then(
      () => {
        console.log('Sign in successful!');
        this.appService.pseudo = this.pseu;
        this.authStatus = this.appService.isAuth;
        //this.appService.saveUserToServer();
        this.router.navigate(['dashboard']);
      }
    );
  }*/
  tryRegister() {
    this.appService.saveUserToServer();
        console.log('Sign in successful!');
        this.appService.pseudo = this.pseu;
        this.authStatus = this.appService.isAuth;
        //this.appService.saveUserToServer();
        this.router.navigate(['dashboard']);
  }

  signInF() {
    this.appService.getUser();
    console.log('Sign in successful!');
        this.appService.pseudo = this.pseu;
        this.appService.login = 1; 
        //this.appService.saveUserToServer();
        
  }

  switchF(a){
    if(a==1){
      this.sUp = false;
    }else{
      this.sUp = true;
    }
  }

  sendTest(){ 
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: { 
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => alert(json.title)
    }

    googleConnect(){
      this.appService.doGoogleLogin();
    }

}
