import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular by daniel';

  setTimeout(function(){
        var ht=window.innerHeight;
        document.querySelector("#smain").style.height=(ht-100)+"px";
      }, 000000050);
}
