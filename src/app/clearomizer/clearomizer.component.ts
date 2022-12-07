import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSliderChange } from '@angular/material/slider';
import { Clearomizer } from './clearomizer';
import { ClearomizerService } from './clearomizer.service';
@Component({
  selector: 'app-clearomizer',
  templateUrl: './clearomizer.component.html',
  styleUrls: ['./clearomizer.component.css']
})
export class ClearomizerComponent implements OnInit {
  gridsize: number = 30;


  Clearomizer:Clearomizer[]=[]; 
  mot: string = '';
  prix:number=0;
  constructor(private ClearomizerService:ClearomizerService,private location: Location) { }

  ngOnInit(): void {
    this.ClearomizerService.getclearomizer().subscribe((Clearomizer:any)=>{
      this.Clearomizer=Clearomizer;
    });
    
    }
  searchClearomizer(){
    if(this.mot==" "){
      this.ClearomizerService.getclearomizer().subscribe((Clearomizer:any)=>{
        this.Clearomizer=Clearomizer;
      });
    }
    else{
      this.Clearomizer = this.Clearomizer.filter(data=>data.nom.toLowerCase().includes(this.mot.toLowerCase()))
    }
   
    console.log(this.Clearomizer);
  }
  searchClearomizerBYPrix(event: MatSliderChange){
    console.log( event.value);
    if(event.value==0){
      this.ClearomizerService.getclearomizer().subscribe((Clearomizer:any)=>{
        this.Clearomizer=Clearomizer;
      });
    }
    else{
      this.Clearomizer= this.Clearomizer.filter(data => data.prix >= Number(event.value));
    }
  }
  valid(){
if((this.location.path()=='../user/Clearomizer')||(this.location.path()=='../Admin/Clearomizer')){
  
}else{
  alert("you should made an account first");
}
}
}
