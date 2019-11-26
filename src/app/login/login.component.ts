import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  public loginForm: FormGroup;
  public isSubmitted = false;

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
  }

  get formControls() { return this.loginForm.controls; };

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authservice.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}
