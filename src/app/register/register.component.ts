import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	langs: string[] = [
    'English',
    'French',
    'German',
  ];
	myform: FormGroup;
	firstName: FormControl;
	lastName: FormControl;
	email:FormControl;
	password:FormControl;
	language:FormControl;

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
  	this.createFormControls();
  	this.createForm();
  }


  createFormControls(){
  	this.firstName = new FormControl('', Validators.required);
  	this.lastName = new FormControl('',Validators.required);
  	this.email = new FormControl('',Validators.required);
  	this.password = new FormControl('', [Validators.required,Validators.minLength(8)]);
  	this.language = new FormControl('');
  }

  createForm(){
  	this.myform = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      language: this.language
  	});
  }

  onSubmit() {  
  	if(this.myform.valid){
  		console.log('you submitted value:'+ this.myform.value);
  	}
  	else{
  		alert("Data entered is incorrect");
  	}
    
    }

}
