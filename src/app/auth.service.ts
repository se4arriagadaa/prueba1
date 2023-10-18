import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  validarCredentials(username: string, password: string): string | null {

    if (usernameError) {
      return usernameError;
    }
    if (passwordError) {
      return passwordError;
    }

    return null;
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
