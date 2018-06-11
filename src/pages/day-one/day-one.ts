import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DayOneService } from '../../services/day-one.service';

/**
 * Generated class for the DayOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day-one',
  templateUrl: 'day-one.html',
})
export class DayOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private dayService: DayOneService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayOnePage');
  }

  sections = this.dayService.sections;
}
