import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Storage } from '@ionic/storage';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ]
  }
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage) 
    {
    this.formLogin = this.fb.group(
      {
        name: new FormControl("", Validators.compose([Validators.required, Validators.email])),
        password: new FormControl("", Validators.compose([Validators.required, Validators.min(8), Validators.maxLength(16)]))

      }
    );
  }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log("entro a loginUser");
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
    })
  }

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

}
