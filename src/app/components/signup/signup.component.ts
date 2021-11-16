import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  success: boolean = false;
	failure: boolean = false;
  public registerUserData: any = {};


  constructor(
    private _router: Router,
    private _auth: AuthService) { }

  ngOnInit(): void {
  }
  
  registerUser(){
    //console.log(this.registerUserData);
    this._auth.register(this.registerUserData)
    .subscribe(
      (res) =>{
        console.log(res);
        this.success=true;
      },
      (err) =>{
			this.failure=true;
			console.log(err);
    })

  }

}