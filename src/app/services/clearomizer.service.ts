import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Clearomize } from '../model/clearomize';

const URL = 'http://localhost:3000/Clearomizer';
@Injectable({
  providedIn: 'root'
})
export class ClearomizerService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  getClearomizer():Observable<Clearomize[]>{
    return this.http.get<Clearomize[]>(URL);
    }
  }