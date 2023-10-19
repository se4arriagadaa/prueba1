import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  hide = true;
  user = {
    usuario: '', //revisar html routing
    pass: ''
  }
  mensaje: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) { this.cargarDatosGuardados();}


  Ingresar() {
    const { usuario, pass } = this.user;
    if (this.authService.validarCredentials(usuario, pass)) {
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      console.log('Error: Credenciales inválidas');
    }
  }

  bloquearBtn(): boolean {
    return this.user.usuario.length < 3 || this.user.pass.length != 4;
  }

  IrAlHome() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigate(['/home'], navigationExtras)
  }

  recovery() {
    this.router.navigate(['/recovery'])
  }

  validarUsername(username: string): string | null {
    if (username.length < 3 || username.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return null;
  }

  validarPassword(password: string): string | null {
    if (password.length !== 4) {
      return 'La contraseña debe tener 4 caracteres.';
    }
    return null;
  }

  login() {

  }

  async cargarDatosGuardados() {
    const nombreUsuario = await this.storage.get('user.usuario');
    const password = await this.storage.get('user.pass');

    if (nombreUsuario) {
      this.user.usuario = nombreUsuario;
    }
    if (password) {
      this.user.pass = password;
    }
  }
}