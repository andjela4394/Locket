import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCountProducts, selectTotalPrice } from 'src/app/cart-state-store/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  countProducts$: Observable<number>;
  

  constructor(private store:Store){
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
  }

}
