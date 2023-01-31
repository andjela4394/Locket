import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCountProducts, selectTotalPrice } from 'src/app/cart-state-store/cart.selector';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  countProducts$: Observable<number>;
  

  constructor(private store:Store, private authService:AuthService){
    this.countProducts$ = store.select(selectCountProducts);
  }

  isAdmin!:boolean;
  isLoggedIn!:boolean;

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  public logout(){
    this.authService.logout();
  }
}
