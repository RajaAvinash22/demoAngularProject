import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ManageProductsComponent,
    ProductFormComponent,
    ShopComponent,
    ProductBoxComponent,
    QuantitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'manage-products',
        component: ManageProductsComponent,
        // canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'product-form/:id',
        component: ProductFormComponent,
        // canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'product-form',
        component: ProductFormComponent,
        // canActivate: [AuthGuardService, AdminAuthGuardService]
      }
    ])
  ],
  providers: [
    UserService,
    AdminAuthGuardService     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
