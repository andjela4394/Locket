import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  constructor(public authService: AuthService, public router:Router) {
    this.message = '';
  }
  

  async login(username: string, password: string): Promise<boolean> {
    const isAuthenticated = await this.authService.login(username, password);
    if (!isAuthenticated) {
      this.message = 'Vaši podaci nisu tačni ili ne postoje!!!.';
      const self = this;
      setTimeout(function () {
        self.message = '';
      }.bind(this), 2500);
        
    }
    this.router.navigateByUrl('/home');
    return false;
}

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}  