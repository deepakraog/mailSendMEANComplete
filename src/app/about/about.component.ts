import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   message:string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.dataService.currentMessage.subscribe(message=>
  		this.message = message)
  }

}
