import { Component } from '@angular/core';



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
