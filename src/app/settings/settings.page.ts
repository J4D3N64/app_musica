import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userImage = "assets/img/profile.png";
  photo: any;
  user={
    name:String,
    email:String,
    password:String,
    confirmPassword:String
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
    const currentUser=JSON.parse(this.userService.getUser());
    this.user.name=currentUser.name;
    this.user.email=currentUser.mail;
    this.user.password=currentUser.password;
    this.user.confirmPassword=currentUser.confirmPassword;
  }

  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = image.dataUrl;
    console.log(image.dataUrl)
  }

}
