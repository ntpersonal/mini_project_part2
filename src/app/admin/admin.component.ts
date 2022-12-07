import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Boxes } from '../boxes/boxes';
import { Clearomizer } from '../clearomizer/clearomizer';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm!:FormGroup;
  lesBoxes!:Boxes[];
  lesAto!:Clearomizer[];
  constructor(private fb:FormBuilder,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminForm = this.fb.nonNullable.group({
      nom:[''],
      prix:[0],
      quantite:[0],
      dispo:[true],
      image:['']
    })
    this.adminservice.getBoxes().subscribe(data => this.lesBoxes = data);
    this.adminservice.getAto().subscribe(data => this.lesAto = data)
  } 
  ajouterBox(){
    this.adminservice.addBoxe(this.adminForm.value).subscribe(data =>this.lesBoxes.push(data));
  }
  supp(id:number){
    this.adminservice.deleteBoxe(id).subscribe(
      ()=>this.lesBoxes=this.lesBoxes.filter(data=>data.id!=id)
    );
  }
  modifier(i:number){
    this.adminservice.updateBoxe(i,this.adminForm.value).subscribe(
      
    );
  }
  ajouterAto(){
    this.adminservice.addAto(this.adminForm.value).subscribe(data =>this.lesAto.push(data));
  }
  suppAto(id:number){
    this.adminservice.deleteAto(id).subscribe(
      ()=>this.lesAto=this.lesAto.filter(data=>data.id!=id)
    );
  }
  modifierAto(i:number){
    this.adminservice.updateAto(i,this.adminForm.value).subscribe(
      
    );
  }
}
