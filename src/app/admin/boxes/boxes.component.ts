import { Component, OnInit } from '@angular/core';
import { Boxes } from './boxes';

import { MatSliderChange } from '@angular/material/slider';
import { BoxesService } from './boxes.service';
@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  gridsize: number = 30;


  boxes: Boxes[]=[]; 
  mot: string = '';
  prix:number=0;
  constructor(private boxesservvice:BoxesService) { }

  ngOnInit(): void {
    this.boxesservvice.getBoxes().subscribe((boxes:any)=>{
      this.boxes=boxes;
    });
    }
  searchBox(){
    if(this.mot==" "){
      this.boxesservvice.getBoxes().subscribe((boxes:any)=>{
        this.boxes=boxes;
      });
    }
    else{
      this.boxes = this.boxes.filter(data=>data.nom.toLowerCase().includes(this.mot.toLowerCase()))
    }
   
    console.log(this.boxes);
  }
  searchBoxBYPrix(event: MatSliderChange){
    console.log( event.value);
    if(event.value==0){
      this.boxesservvice.getBoxes().subscribe((boxes:any)=>{
        this.boxes=boxes;
      });
    }
    else{
      this.boxes = this.boxes.filter(data => data.prix >= Number(event.value));
    }
  }
}
