import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string = '';
  
  constructor(private activatedRoute: ActivatedRoute) {
  this.activatedRoute.queryParams.subscribe(params => {
    if (params && params['value']) {
      this.nombreUsuario = params['value'];
    };
  });
}
}

