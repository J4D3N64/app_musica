import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  formRegister: FormGroup;
  constructor(public fb: FormBuilder,
    private route: Router,
    private alertController: AlertController,
    private toastController: ToastController) {
    this.formRegister = this.fb.group(
      {
        'name': new FormControl("", Validators.compose([Validators.required, Validators.email])),
        'password': new FormControl("", Validators.compose([Validators.required, Validators.min(8), Validators.maxLength(16)])),
        'confirmPassword': new FormControl("", Validators.compose([Validators.required, Validators.min(8), Validators.maxLength(16)]))
      }
    );
  }

  ngOnInit() {
  }
  goToLogin() {
    this.route.navigateByUrl("/login");
  }
  async registerNewUser() {
    var form = this.formRegister.value;
    if (this.formRegister.invalid) {
      const alert = await this.alertController.create(
        {
          header: "Alerta!",
          message: "Todos los campos son requeridos!",
          buttons: ['Aceptar']
        }
      );
      await alert.present();
      return;
    }

    var user = {
      name: form.name,
      password: form.password,
      confirmPassword: form.confirmPassword
    }

    localStorage.setItem('User', JSON.stringify(user));
    this.goToLogin();
  }

  /**Otra funcion para mostrar mensajes personalizados */
  async showErrorMessage() {
    const toast = await this.toastController.create({
      message: 'El formato de correo electrónico es incorrecto',
      duration: 2000,
      position: 'bottom'

    });
    toast.present();
  }

  onSubmit() {
    if (this.formRegister.invalid) {
      this.showErrorMessage();
      return;
    }

  }
}