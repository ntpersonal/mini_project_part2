import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BoxesComponent } from './boxes/boxes.component';
import { ClearomizerComponent } from './clearomizer/clearomizer.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'; 
import { ImageService } from './image.service';
import { VapeComponent } from './vape/vape.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BoxesComponent,
    ClearomizerComponent,
    ErrorComponent,
    FooterComponent,
    VapeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule    
  ],
  providers:  [ ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
