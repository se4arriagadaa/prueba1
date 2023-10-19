import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styles: ['./login.page.scss']
})

export class LoginPage implements OnInit {
  
  hide = true;
  private isLoggedIn: boolean = false;
  user: User = { username: '', password: ''};
  errorMessage: string = '';
  
  constructor(private apiService: ApiService, private router: Router) {}

    // login() {
    //   this.apiService.getUsuario("nombre_usuario").subscribe(
    //     (response) => {
    //       // Verificar la respuesta del servidor y manejarla adecuadamente
    //       console.log('Respuesta del servidor:', response);
    //       // Tu lógica de manejo de respuesta aquí
    //     },
    //     (error) => {
    //       this.errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
    //       console.error('Error en la solicitud:', error);
    //     }
    //   );
    // }

 /* Ingresar() {
    const { usuario, pass } = this.user;
    if (this.validarCredentials(usuario, pass)) {
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
*/
  bloquearBtn(): boolean {
    return this.user.username.length < 3 || this.user.password.length != 4;
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

  /*validarCredentials(username: string, password: string){
    this.apiService.getUsuario().subscribe(
      (usuarios)=> {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.username === username && usuario.password === password);
      
        if (usuarioEncontrado) {
          // Usuario encontrado, redirigir a la página de inicio
          this.router.navigate(['/inicio']);
        } else {
          // Usuario no encontrado, mostrar un mensaje de error o realizar la acción correspondiente
          console.log("Usuario no encontrado");
        }
      },
      (error: any) => {
        console.log(error);
      });
    }*/
    ngOnInit() {
    }
  
}