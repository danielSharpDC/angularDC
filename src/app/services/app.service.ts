import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http'; 
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})

export class AppService {
  pseudo = 'root';
  login = 0;
  mdp = '';
  email = '';
  nam = '';
  isAuth = false;
  user: Obsevable<any>;
  url = "https://angulardc-92ab1.firebaseio.com/";

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  constructor(private httpClient: HttpClient, public afAuth: AngularFireAuth, private router: Router) { }

  signOut() {
    this.isAuth = false;
  }

  saveUserJsp(){
    fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    body: JSON.stringify({
      id: 1,
      adr: "010",
      username: this.pseudo,
      name: this.nam,
      email: this.email,
      phone: this.mdp,
      website: "dclearning.com",
      company: "DC Corp"
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => alert(json.id))
  }

  saveUserToServer() {
    this.user=JSON.stringify({
      id: 1,
      username: this.pseudo,
      name: this.nam,
      email: this.email,
      password: this.mdp
    });
    this.httpClient
      .post(this.url+'users.json', this.user)
      .subscribe(
        () => {
          alert('Enregistrement terminé !');
        },
        (error) => {
          alert('Erreur ! : ' + error);
        }
      );
  }
 getUser() {
    /*this.httpClient
      .get<any[]>(this.url+'/users.json')
      .subscribe(
        (response) => {
          this.user = response;
          //this.emitUserSubject();
          alert(this.user.username);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );*/
  this.httpClient.get<any[]>(this.url+"users.json")
  .subscribe(
      (response)=>{
        this.user=response;
        this.router.navigate(['dashboard']);
      },
      (error)=>{
        alert('Erreur ! : ' + error);
      }
    );
  
}

 doRegister(email: string password: string){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(res => {
       resolve(res);
     }, err => {
      alert(err);
     })
   })
 }

 signFirebase(email, password){
    return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(res => {
       resolve(res);
     }, err => {
      alert(err);
     })
    })
  /*firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  // ...
  });*/
 }

 doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    })
  })
 }
}