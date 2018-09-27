import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cPseudo = true;

  getHeight(){
    var h=window.innerHeight;
    return (h-120)+"px"; 
  }

  vPseudo(){
    var obj=document.querySelector("#pse");
    if(obj.value!=""&&obj.value.length>2){
      this.cPseudo=true;
      obj.style.color="green";
      obj.style.borderColor="green";
    }else{
      this.cPseudo=false;
      obj.style.color="red";
      obj.style.borderColor="red";
    }
  }

  sendForm(){
    
  }


  constructor() { }

  ngOnInit() {
  }

}
