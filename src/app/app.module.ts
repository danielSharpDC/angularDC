import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
