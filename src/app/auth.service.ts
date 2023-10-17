import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  validarUsername(username: string): string | null {
    if (username.length < 3 || username.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return null; 
  }

  validarPassword(password: string): string | null {
    if (password.length !== 4) {
      return 'La contraseña debe tener 4 caracteres.';
    }
    return null; 
  }

  validarCredentials(username: string, password: string): string | null {
    const usernameError = this.validarUsername(username);
    const passwordError = this.validarPassword(password);

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
