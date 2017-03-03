import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
  public message: any = "I'm new here";
 
  constructor() {
 
  }
 
  setMessage(message) {
    this.message = message;
    console.log(this.message);
  }

  printUser(user)
  {
  	console.log('testing');
  }

}
