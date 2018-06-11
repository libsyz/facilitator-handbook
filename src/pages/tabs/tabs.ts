
import { Component } from '@angular/core';

import { DayThreePage } from './../day-three/day-three';
import { DayTwoPage } from './../day-two/day-two';
import { DayOnePage } from './../day-one/day-one';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DayOnePage;
  tab2Root = DayTwoPage;
  tab3Root = DayThreePage;

  constructor() {

  }
}
