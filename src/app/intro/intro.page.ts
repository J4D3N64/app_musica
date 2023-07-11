import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }
  slides = [
    { title: "Flores", img: "assets/img/imgslider(1).jpg", icon: "images-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Montaña", img: "assets/img/imgslider(2).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Gota de rocio", img: "assets/img/imgslider(3).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Flor de cerezo", img: "assets/img/imgslider(4).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Nectar!!", img: "assets/img/imgslider(5).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" }, 
    { title: "Invierno", img: "assets/img/imgslider(6).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Pulsatilla primavera", img: "assets/img/imgslider(7).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Playa", img: "assets/img/imgslider(8).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" }, 
    { title: "Galaxia", img: "assets/img/imgslider(9).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" },
    { title: "Sombra", img: "assets/img/imgslider(10).jpg", icon: "beer-outline", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa aspernatur quidem labore nam facilis, fuga quia dicta, quam dolorum soluta, temporibus sapiente saepe! At enim ratione eius tempore repudiandae?" }
  ];
  close() {
    console.log("entro a close!")
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/home")
  }
}
