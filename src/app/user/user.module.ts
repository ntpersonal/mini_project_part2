import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
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
import { VapeComponent } from './vape/vape.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
    declarations: [
        DashboradComponent,
        AppComponent,
        MenuComponent,
        HomeComponent,
        BoxesComponent,
        ClearomizerComponent,
        ErrorComponent,
        FooterComponent,
        VapeComponent,
        CartComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      NgImageSliderModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatSliderModule ,
      CommonModule,
      UserRoutingModule,
    ],

    bootstrap: [AppComponent]
})
export class UserModule { }
