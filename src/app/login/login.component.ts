import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private fb:FormBuilder, private http:HttpClient,private router: Router) { }
  loginForm!:FormGroup;
  tab:Login[]=[];

  ngOnInit(): void {
    this.loginForm=this.fb.nonNullable.group({
      email:['',Validators.required],
      password:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]]
    })
    this.loginservice.getLogin().subscribe((data:any)=>{
      this.tab=data;
    })
  }
  
  exist:boolean=false;
  login(){
    for(let i=0;i<this.tab.length;i++){
      if(this.tab[i].email===this.loginForm.value.email && this.tab[i].password===this.loginForm.value.password){
        this.exist=true;
      }
    }
    if (this.exist){
      this.router.navigate(['/Admin']);
      alert('WELCOME !');
    }
    else
    alert('User undefined')
    this.loginForm.reset();
  }
  MailRequired(){
    return this.loginForm.controls['email'].errors?.['required'] &&
    this.loginForm.controls['email'].dirty;
  }
  PassRequired(){
    return this.loginForm.controls['password'].errors?.['required'] &&
    this.loginForm.controls['password'].dirty;
  }
  isValidPattern(){
    return this.loginForm.controls['password'].errors?.['pattern'] &&
    this.loginForm.controls['password'].dirty;
  }
}
