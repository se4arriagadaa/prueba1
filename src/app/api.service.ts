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

  getUsuario(id: any): Observable<any> {
    return this.http.get(this.apiUrl + "/posts/" + id).pipe(
      retry(3)
    )
  }
  /*
  getUsuario() {
    return this.http.get(this.apiUrl+'/listarUsuarios').pipe(
      retry(3)
    );
  }*/
}
