import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dbUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
        this.http.get(this.dbUrl).subscribe((data: any) => {
            for (const user of data) {
                if (user.username === username && user.password === password) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('isAdmin', user.isAdmin);
                    resolve(true);
                    break;
                }
            }
            resolve(false);
        });
    });
}
  

  logout(): any {
    localStorage.removeItem('username');
  }
  getUser(): any {
    return localStorage.getItem('username');
  }
  getAdmin():any{
    console.log(localStorage.getItem('isAdmin'));
    return localStorage.getItem('isAdmin');
  }
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
  isAdmin(): boolean {
    return this.getAdmin() == "true";
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
