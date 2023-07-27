import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { }

  loginUser(credentials:any){
    console.log("entro a servicio auth");
    return new Promise((accept, reject) => {
      if (
        
        credentials.name == "alvarop@pca.com" && 
        credentials.password == "123456789"
      )
      {
        console.log("usuario valido");
        accept("Login exitoso")
      } else {
        console.log("usuario no valido");
        reject("Verifique sus credenciales")
      }
    })
  }

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
