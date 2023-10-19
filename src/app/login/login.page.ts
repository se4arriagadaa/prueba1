import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit {

  nombreUsuario: string = '';

  hide = true;
  private isLoggedIn: boolean = false;
  user: User = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  bloquearBtn(): boolean {
    return this.user.username.length < 3 || this.user.password.length != 4;
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

  validarUsername(user: string): string | null {
    if (user.length < 3 || user.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return null;
  }

  validarPassword(pass: string): string | null {
    if (pass.length !== 4) {
      return 'La contraseña debe tener 4 caracteres.';
    }
    return null;
  }
  ngOnInit() {
  }

}