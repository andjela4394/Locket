import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoggedInGuard } from './logged-in.guard';
import { AUTH_PROVIDERS } from './services/auth.service';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [LoggedInGuard]},
  { path: 'search/:searchTerm', component: HomeComponent, canActivate: [LoggedInGuard]},
  { path: 'products/:id', component:ProductPageComponent, canActivate: [LoggedInGuard]},
  { path: 'cart', component:CartComponent, canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:SignupComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
    ],
    
})
export class AppRoutingModule { }
