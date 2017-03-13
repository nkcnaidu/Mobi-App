import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { User } from '../providers/user';
import {LandingPage} from '../pages/landing/landing';
import {ProfilePage} from '../pages/profile/profile';
import { ChartboardPage} from '../pages/chartboard/chartboard';
import {ChatsPage} from '../pages/chats/chats';
import {TeamsPage} from '../pages/teams/teams';
import {GroupsPage} from '../pages/groups/groups';
import {ChatwindowPage} from '../pages/chatwindow/chatwindow';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LandingPage,
    ProfilePage,
    ChartboardPage,
    ChatsPage,
    TeamsPage,
    GroupsPage,
    ChatwindowPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LandingPage,
    ProfilePage,
    ChartboardPage,
    ChatsPage,
    TeamsPage,
    GroupsPage,
    ChatwindowPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},User]
})
export class AppModule {}
