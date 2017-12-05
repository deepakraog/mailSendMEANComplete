import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataform: FormGroup;
  name: FormControl;
  company: FormControl;
  email: FormControl;
  phone: FormControl;
  messageit: FormControl;
  username:string ;
  userData:any;
  message:string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  		this.username = this.dataService.getUser();
  		this.getClientData();
  		this.dataService.currentMessage.subscribe(message => this.message = message);
      this.createFormCotrol();
      this.createForm();
  }

  getClientData(){
    this.dataService.getClientService().subscribe(data=>{
     this.userData = data;
    });
  }
  newMessage() {
    this.dataService.changeMessage("Hello from Sibling");
  }
  getDataFromDB(){
    var data = this.dataService.getTaskData();
    console.log(data);
  }
  createFormCotrol(){
    this.name = new FormControl('',Validators.required);
    this.company = new FormControl('',Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phone = new FormControl('',Validators.required);
    this.messageit = new FormControl('');
  }
  createForm(){
    this.dataform = new FormGroup({
    name : this.name,
    company: this.company,
    email: this.email,
    phone: this.phone,
    messageit: this.messageit
    });
  }
  submitForm(){
    if(this.dataform.valid){
      console.log(this.dataform.value.name);
      console.log(this.dataform.value.company);
      console.log(this.dataform.value.email);
      console.log(this.dataform.value.phone);
      console.log(this.dataform.value.messageit);
      var temp = this.dataService.sendMail(this.dataform.value);
      console.log("Temp "+temp);

    }
    else{
      alert("Invalid data");
    }
  }

}
