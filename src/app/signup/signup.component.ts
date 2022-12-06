import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup
 
  constructor(private fb:FormBuilder, private http:HttpClient,private router: Router) { }
  
  ngOnInit(): void {
    this.signupForm=this.fb.nonNullable.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:[,Validators.required],
      password:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
    })
  }
  isValidPattern(){
    return this.signupForm.controls['password'].errors?.['pattern'] &&
    this.signupForm.controls['password'].dirty;
  }
  PassRequired(){
    return this.signupForm.controls['password'].errors?.['required'] &&
    this.signupForm.controls['password'].dirty;
  }
  NameRequired(){
    return this.signupForm.controls['name'].errors?.['required'] &&
    this.signupForm.controls['name'].dirty;
  }
  MailRequired(){
    return this.signupForm.controls['email'].errors?.['required'] &&
    this.signupForm.controls['email'].dirty;
  }
  PhoneRequired(){
    return this.signupForm.controls['mobile'].errors?.['required'] &&
    this.signupForm.controls['mobile'].dirty;
  }
  signup(){
    this.http.post<any>("http://localhost:3000/users",this.signupForm.value).subscribe(data=>{
      
      this.signupForm.reset();
    })
    alert("Done");
    this.router.navigate(['Login']);
  }
}
