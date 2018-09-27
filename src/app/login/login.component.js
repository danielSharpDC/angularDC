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
    if(this.value!=""&&this.value.length>2){
      cPseudo=true;
      this.className="correct";
    }else{
      cPseudo=false;
      this.className="incorrect";
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
