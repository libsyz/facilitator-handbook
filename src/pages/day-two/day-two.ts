import { TasksPage } from './../tasks/tasks';
import { DayOneService } from './../../services/day-one.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DayTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day-two',
  templateUrl: 'day-two.html',
})
export class DayTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dayService: DayOneService) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad DayOnePage');
    }
  
    sections = this.dayService.sections_two;
  
    onGoToTaskPage(section) {
      this.navCtrl.push(TasksPage, {section: section})
    }

}
