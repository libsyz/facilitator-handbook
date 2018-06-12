
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DayOneService } from './../services/day-one.service';


import { DayThreePage } from './../pages/day-three/day-three';
import { DayTwoPage } from './../pages/day-two/day-two';
import { DayOnePage } from './../pages/day-one/day-one';

import { TasksPage } from './../pages/tasks/tasks';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DayOnePage,
    DayTwoPage,
    DayThreePage,
    TasksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DayOnePage,
    DayTwoPage,
    DayThreePage,
    TasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DayOneService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
