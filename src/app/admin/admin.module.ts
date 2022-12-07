import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { BoxesComponent } from './boxes/boxes.component';
import { MenuComponent } from './menu/menu.component';
import { ClearomizerComponent } from './clearomizer/clearomizer.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { VapeComponent } from './vape/vape.component';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
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
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule
  ]
})
export class AdminModule { }
