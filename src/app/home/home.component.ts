import { Component, OnInit} from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Boxes } from '../boxes/boxes';
import { Location } from '@angular/common';
import { BoxesService } from '../boxes/boxes.service';
import { Clearomizer } from '../clearomizer/clearomizer';
import { ClearomizerService } from '../clearomizer/clearomizer.service';
import { Vape } from '../vape/vape';
import { VapeService } from '../vape/vape.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Clearomizer:Clearomizer[]=[]; 
  boxes: Boxes[]=[]; 
  Vape:Vape[]=[];
  images :Array<object>= [{
   thumbImage:'../assets/news3.JPG',
  },{
    thumbImage:'../assets/news2.jpg',
  },{
    thumbImage:'../assets/news1.jpg'
  }];
  constructor(private ClearomizerService:ClearomizerService,private boxesservvice:BoxesService,private VapeService:VapeService,private location: Location) {
  }
  ngOnInit(): void {
    this.VapeService.getVape().subscribe((Vape:any)=>{
      this.Vape=Vape;
    });
    this.boxesservvice.getBoxes().subscribe((boxes:any)=>{
      this.boxes=boxes;
    });  
    this.ClearomizerService.getclearomizer().subscribe((Clearomizer:any)=>{
      this.Clearomizer=Clearomizer;
    });
  }
  valid(){
    if((this.location.path()=='../user/Home')||(this.location.path()=='../Admin/Home')){
      
    }else{
      alert("you should made a account first");
    }
    }
}
