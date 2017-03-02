import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { User } from '../../providers/user';


/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user= {'firstname':'',lastname:'',password:'',confirm_password:'',email:'',dateofbirth:'',employeeID:'',team:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService:User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  gotoLogin()
  {
  	this.navCtrl.push(HomePage);
  }


  signup()
  {
    console.log(this.userService.printUser(this.user));
  }
}
