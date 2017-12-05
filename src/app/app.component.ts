import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
	@ViewChild(ChildComponent) child;
	name:string;
	designation:string;
	parentMessage='I am coming from parent and dispalying in child';
	childMessage:string;
	message:string;
  constructor(private dataService : DataService){

  }
  ngOnInit(){
  	this.loadData();
  	this.dataService.currentMessage.subscribe(message => this.message = message);
  }
  ngAfterViewInit(){
  	/*this.name=this.child.name;
  	this.designation = this.child.designation;*/
  }
  loadData(){
  	/*this.dataService.getCustomerData().subscribe(data =>{
      console.log(data);
  	});*/
  }
  receiveMessage($event){
  	this.childMessage = $event;
  }
  newMessage() {
    this.dataService.changeMessage("Hello from Sibling");
  }



}
