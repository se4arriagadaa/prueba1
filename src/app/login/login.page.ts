import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit {

  usuario: any;
  nombreUsuario = {
    texto:''
  }
  password = {
    texto:''
  }

<<<<<<< Updated upstream
  constructor(private api: ApiService, private router: Router) { }

  validarUsuario(){
    this.api.buscarUsuario(this.nombreUsuario.texto, this.password.texto).subscribe(
      (resultado)=>{
        console.log(resultado);
        if (resultado){
          this.IrAlHome()
        };  
      },
      (error)=>{
        console.log(error);
      });  
=======
  hide = true;
  private isLoggedIn: boolean = false;
  user: User = { username: '', password: ''};
  mostrarMensaje: boolean = false;
  mensaje: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    this.apiService.getUsuario().subscribe(
    (response) => {
      if (this.verificarCredenciales(response)) {
        const navigationExtras: NavigationExtras = {
          state: {
            mensaje: '¡Bienvenido! Has iniciado sesion correctamente.'
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      } else {
        console.log('Nombre o contraseña incorrecto.')
      }
    },
    (error) => {
      console.error('Error en la solicitud:', error);
    }
    );
  }

  verificarCredenciales(response: any): boolean {
    return response.User === this.user.username && response.password === this.user.password;
    return true; 
  }

  bloquearBtn(): boolean {
    return this.user.username.length < 3 || this.user.password.length != 4;
>>>>>>> Stashed changes
  }

  IrAlHome() {
    let navigationExtras: NavigationExtras = {
      state: {
        nombreUsuario: this.nombreUsuario.texto
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