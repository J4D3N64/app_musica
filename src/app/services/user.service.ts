import { Injectable } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user={
    name:String,
    mail:String,
    password:String,
    confirmPassword:String
  }

  /* urlServer = "https://musicback.fly.dev";
  constructor() { }

  getUser(user_id: number){
    return fetch(`${this.urlServer}/current_user/${user_id}`).then(
      response => response.json()
    );
  } */
  constructor() { }


  getUser(){
    const usersGuardado=localStorage.getItem("User");
    if(usersGuardado){
      this.user=JSON.parse(usersGuardado);
      
    }
    return JSON.stringify(this.user);

  }
}
