import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  loginRoute: string = 'login';
  email: string = '';
  isProcessing: boolean = false;
  constructor(private toastController: ToastController) { }

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

}
