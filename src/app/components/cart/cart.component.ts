import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from 'src/app/cart-state-store/cart.action';
import { ProductGroup, selectGroupCartEntries, selectTotalPrice } from 'src/app/cart-state-store/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartEntries$: Observable<ProductGroup[]>;
  totalPrice$: Observable<number>;

  constructor(private store:Store){
    this.cartEntries$ = store.select(selectGroupCartEntries);
    this.totalPrice$ = store.select(selectTotalPrice);
  }

  ngOnInit(): void {
    
  }

  clearEntries(){
    this.store.dispatch(clearCart());
  }

  more(entry:any){
    this.store.dispatch(addProduct(entry.product));
  }

  less(entry:any){
    this.store.dispatch(removeProduct(entry.product));
  }

}
