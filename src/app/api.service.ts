import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  apiUrl = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  buscarUsuario(nombreUsuario: string, password: string): Observable<any> {
    return this.http.get(this.apiUrl + "/buscarUsuario" + '?nombre_usuario=' + nombreUsuario + '&password=' + password).pipe(retry(3))
  }
}
