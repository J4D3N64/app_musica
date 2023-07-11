import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:Router) { }
  Control = {
    Title:"Intro",
    Img:"assets/img/g.png",
    Icon:"home",
    Description:"Navega hasta la siguiente pagina"
  };
  intro(){
    console.log("Click")
    this.route.navigateByUrl("/intro");
  }

}
