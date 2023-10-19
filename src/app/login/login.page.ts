import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit {

  hide = true;
  private isLoggedIn: boolean = false;
  usuario = { texto: '' };
  password = { texto: '' };


  mostrarMensaje: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    this.apiService.buscarUsuario(this.usuario.texto, this.password.texto).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          this.IrAlHome()
        };
});
  }

verificarCredenciales(response: any): boolean {
  return response.User === this.usuario.texto && response.password === this.password.texto;
}

bloquearBtn(): boolean {
  return this.usuario.texto.length < 3 || this.password.texto.length != 4;
}

IrAlHome() {
  let navigationExtras: NavigationExtras = {
    state: {
      nombreUsuario: this.usuario.texto
    }
  }
  this.router.navigate(['/home'], navigationExtras);
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