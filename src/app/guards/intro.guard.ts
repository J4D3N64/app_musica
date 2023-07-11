import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router){

  }
  canActivate(){
    /* this.storage.set("introShow",true); */
    console.log("Guard!!");
   /*  console.log(this.storage);
    this.router.navigateByUrl("/intro") */
    return true;
  }
  
}
