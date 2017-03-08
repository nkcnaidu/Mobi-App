import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ChartboardPage} from '../chartboard/chartboard';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navChat()
  {
  	this.navCtrl.setRoot(ChartboardPage);
  }

}
