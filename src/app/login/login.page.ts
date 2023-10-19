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