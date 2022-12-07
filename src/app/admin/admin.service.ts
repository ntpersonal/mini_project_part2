import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxes } from '../boxes/boxes';
import { Clearomizer } from '../clearomizer/clearomizer';

const URL2 = 'http://localhost:3000/clearomizer';
const URL1 = 'http://localhost:3000/boxes';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getBoxes():Observable<Boxes[]>{
    return this.http.get<Boxes[]>(URL1);
  }
  addBoxe(b:Boxes):Observable<Boxes>{
    return this.http.post<Boxes>(URL1, b);
  }
  deleteBoxe(id:number){
    return this.http.delete(URL1+"/"+id);
  }
  updateBoxe(id:number,b:Boxes){
    return this.http.put<Boxes>(URL1+"/"+id,b);
  }
  getAto():Observable<Clearomizer[]>{
    return this.http.get<Clearomizer[]>(URL2);
  }
  addAto(c:Clearomizer):Observable<Clearomizer>{
    return this.http.post<Clearomizer>(URL2, c);
  }
  deleteAto(id:number){
    return this.http.delete(URL2+"/"+id);
  }
  updateAto(id:number,c:Clearomizer){
    return this.http.put<Clearomizer>(URL2+"/"+id,c);
  }
  constructor(private http:HttpClient) { }
}
