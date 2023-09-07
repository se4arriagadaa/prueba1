import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  pass: string = '';
  mensaje: string = '';

  validacion1() {
    if (this.usuario.length < 3) {
      this.mensaje = 'Debes tener entre 3 y 8 caracteres';
    } else {
      this.mensaje = '';
    }
  }

  validacion2() {
    if (this.pass.length < 3) {
      this.mensaje = 'Deben ser 4 caracteres';
    } else {
      this.mensaje = '';
    }
  }

  bloquearBtn(): boolean {
    return this.usuario.length < 3 || this.pass.length != 4;
  }



  constructor(private navCtrl: NavController) { }
  Ingresar() {
    this.navCtrl.navigateForward('/home', {
      queryParams: {
        value: this.usuario,
      },
    });
  }

}