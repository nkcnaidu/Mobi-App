import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChatsPage} from '../chats/chats';
import {TeamsPage} from '../teams/teams';
import {GroupsPage} from '../groups/groups';

/*
  Generated class for the Chartboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chartboard',
  templateUrl: 'chartboard.html'
})
export class ChartboardPage {
  tab1Root = ChatsPage;
  tab2Root = TeamsPage;
  tab3Root = GroupsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartboardPage');
  }

}
