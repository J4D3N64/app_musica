import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
  async takePhoto(){
    const image=await Camera.getPhoto({
      quality:100,
      allowEditing:false,
      resultType:CameraResultType.Base64,
      source:CameraSource.Camera
    });
    console.log(image);
  }

}
