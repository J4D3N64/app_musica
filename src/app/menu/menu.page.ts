import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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
  goToHome(){
    this.navCtrl.navigateRoot("/menu/home");
    this.menu.close();
  }
  goToSettings(){
    this.navCtrl.navigateForward('/menu/settings');
    this.menu.close();
  }
  logOut(){
    this.navCtrl.navigateRoot('/login');
  }

}
