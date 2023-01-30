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
<<<<<<< HEAD
import { ProductPageComponent } from './components/product-page/product-page.component';
=======
>>>>>>> ec3a7a43bcd84e7124cd7ea1ffee59f259234958


@NgModule({
    declarations: [
        AppComponent,
        ProtectedComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
<<<<<<< HEAD
        SearchComponent,
        ProductPageComponent
=======
        SearchComponent
>>>>>>> ec3a7a43bcd84e7124cd7ea1ffee59f259234958
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
