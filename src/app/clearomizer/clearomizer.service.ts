import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ClearomizerService {

  constructor(private http:HttpClient) { }
  getclearomizer(){
    return this.http.get('http://localhost:3000/Clearomizer');
  }
  
}
