import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { ClearomizerComponent } from './clearomizer/clearomizer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'Home', title:'Home', component:HomeComponent},
{path:'Boxes', title:'Boxes', component:BoxesComponent},
{path:'Clearomizer', title:'Clearomizer', component:ClearomizerComponent},
{path:'', redirectTo:'Home', pathMatch:'full'},
{path:'**', title:'Erreur', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
