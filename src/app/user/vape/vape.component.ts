import { Component, OnInit } from '@angular/core';
import { Vape } from './vape';
import { MatSliderChange } from '@angular/material/slider';
import{VapeService} from './vape.service';
@Component({
  selector: 'app-vape',
  templateUrl: './vape.component.html',
  styleUrls: ['./vape.component.css']
})
export class VapeComponent implements OnInit {
  gridsize: number = 30;
  Vape:Vape[]=[]; 
  mot: string = '';
  prix:number=0;
  constructor(private VapeService:VapeService) { }

  ngOnInit(): void {
    this.VapeService.getVape().subscribe((Vape:any)=>{
      this.Vape=Vape;
    });
    }
  searchVape(){
    if(this.mot==" "){
      this.VapeService.getVape().subscribe((Vape:any)=>{
        this.Vape=Vape;
      });
    }
    else{
      this.Vape = this.Vape.filter(data=>data.nom.toLowerCase().includes(this.mot.toLowerCase()))
    }
   
    console.log(this.Vape);
  }
  searchVapeBYPrix(event: MatSliderChange){
    console.log( event.value);
    if(event.value==0){
      this.VapeService.getVape().subscribe((Vape:any)=>{
        this.Vape=Vape;
      });
    }
    else{
      this.Vape= this.Vape.filter(data => data.prix >= Number(event.value));
    }
  }
}

