import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  loginRoute: string = 'login';
  email: string = '';
  isProcessing: boolean = false;
  
  constructor(
    private toastController: ToastController, 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService 
    ) {
      this.route.queryParams.subscribe(params => {
        const navigationExtras = this.router.getCurrentNavigation()?.extras;
    if (navigationExtras && navigationExtras.state && 'user' in navigationExtras.state) {
      this.userService.user = navigationExtras.state['user'];
        }
      }); 
   } 

  enviarSolicitud() {
    if(this.validarEmail(this.email)) {
    // mensaje de exito
    this.mostrarMensaje('Solicitud enviada con éxito');

    // clear input
    this.email = '';
  } else {
    this.mostrarMensaje('Ingrese un correo valido');
  }
}
  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // duracion de mensaje
      position: 'top', // posicion de mensaje
    });
    toast.present();
  }

  validarEmail(email: string): boolean { //validar formato correo
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login'])
  }

}
