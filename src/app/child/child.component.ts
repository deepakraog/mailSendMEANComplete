import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	@Input() childMessage:string;
	name:string='suman';
    designation:string='Software Engineer';
    message:string='I have emitted from child and displaying in parent';
    @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
  	this.messageEvent.emit(this.message);
  }

}
