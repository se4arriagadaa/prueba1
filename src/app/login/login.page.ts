import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService, private router: Router) {}


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
      // Si la autenticación falla, puedes mostrar un mensaje de error.
      console.log('Error: Credenciales inválidas');
    }
  }

  bloquearBtn(): boolean {
    return this.user.usuario.length < 3 || this.user.pass.length != 4;
  }

  IrAlHome () {
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

}