import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { cartReducer, metaReducerLocalStorage } from './cart-state-store/cart.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        ProtectedComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        SearchComponent,
        ProductPageComponent,
        CartComponent
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({ cartEntries: cartReducer}, { metaReducers: [metaReducerLocalStorage]})
    ]
})
export class AppModule { }
