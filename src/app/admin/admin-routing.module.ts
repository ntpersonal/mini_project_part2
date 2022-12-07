import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { ClearomizerComponent } from './clearomizer/clearomizer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'Admin', title:'Admin', component:HomeComponent,
children:[
{path:'Boxes', title:'Boxes', component:BoxesComponent},
{path:'Clearomizer', title:'Clearomizer', component:ClearomizerComponent},
{path:'', redirectTo:'Home', pathMatch:'full'},
{path:'**', title:'Erreur', component:ErrorComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
