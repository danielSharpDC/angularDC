import { Component, OnInit } from '@angular/core';
import { DonneesService } from ' ./donnees.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cPseudo = true;
  cPass = true;
  login = false;
  pse = "";
  mdp = "";

  getHeight(){
    var h=window.innerHeight;
    return (h-120)+"px"; 
  }

  vPseudo(){
    var obj=document.querySelector("#pse");
    if(obj.value.length>2){
      this.cPseudo=true;
      this.pse=obj.value;
      obj.style.color="green";
      obj.style.borderColor="green";
    }else{
      this.cPseudo=false;
      obj.style.color="red";
      obj.style.borderColor="red";
    }
  }

  vPass(){
    var ob=document.querySelector("#pas");
    if(ob.value.length>4){
      this.cPass=true;
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


  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.pseudo = this.pse;
  }

}
