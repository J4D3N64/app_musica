import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Canciones', url: '/intro', icon: 'musical-notes' },
    { title: 'Configuracion', url: '/settings', icon: 'settings' },
    
  ];

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  closeMenu(){
    console.log("closeMenu");
    this.menu.close();
  }

  logout(){
    console.log("logout");
    this.navCtrl.navigateRoot('/login');
  }


  goToSettings(){
    console.log("goToSettings");
    this.navCtrl.navigateForward('/menu/settings');
    this.menu.close();
  }

  goToHome(){
    console.log("goToHome");
    this.navCtrl.navigateRoot("/menu/home");
    this.menu.close();
  }


}
