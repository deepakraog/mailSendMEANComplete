import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService{
	private isUserLoggedIn;
	private username;
	private dataFromDB = new BehaviorSubject<string>("default message");
	currentMessage = this.dataFromDB.asObservable();
	constructor(private http: Http){
        this.isUserLoggedIn = false;
	}
	getCustomerData(){
		return this.http.get('/api/loginData')
		.map(res=> res.json());
	}
	getClientService(){
		return this.http.get('/api/clientData')
		.map(res=>res.json());
	}

      setUserLoggedIn(){
      	this.isUserLoggedIn = true;
      }
      getUserLoggedIn(){
      	return this.isUserLoggedIn;
      }
      setUser(user){
      	this.username = user;
      }
      getUser(){
      	return this.username;
      }
      changeMessage(message: string){
      	this.dataFromDB.next(message);
      }
      getTaskData(){
           var data = this.http.get('/tasks/task');
           console.log("data "+data);
           return data;
      }
      sendMail(data:any){
        return this.http.post('/sendmail',data)
        .map(res=>res.json());
      }

}
