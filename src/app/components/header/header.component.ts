import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCountProducts, selectTotalPrice } from 'src/app/cart-state-store/cart.selector';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { clearCart } from 'src/app/cart-state-store/cart.action';

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
  username!:string;

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUser();
  }

  public logout(){
    this.authService.logout();
    this.store.dispatch(clearCart());
  }
}
