import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(private http:HttpClient) { }
  getBoxes(){
    return this.http.get('http://localhost:3000/boxes');
  }
  
}
