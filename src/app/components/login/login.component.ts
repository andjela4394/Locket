import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  constructor(public authService: AuthService) {
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
        // navigate to the home page
    }
    return false;
}

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}  