import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayOnePage } from './day-one';

@NgModule({
  declarations: [
    DayOnePage,
  ],
  imports: [
    IonicPageModule.forChild(DayOnePage),
  ],
})
export class DayOnePageModule {}
