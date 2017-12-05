import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string = '';
  password:string = '';
  message:string = '';
  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit() {
  }
  loginUser(){
  	var temp=[];
  	this.dataService.getCustomerData().subscribe(data =>{
      for(var i =0;i<data.length;i++){
      	if(data[i].uname == this.name && data[i].pwd == this.password){
      		this.dataService.setUserLoggedIn();
		  	this.dataService.setUser(this.name);
		  	this.router.navigate(['/home']);

      	}
      	else{
      		this.message = "Worng username/Password";
      	}
      }
  	});
  	

  }

}
