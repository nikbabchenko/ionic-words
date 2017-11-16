import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsComponent } from './details';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    IonicPageModule.forChild(DetailsComponent),
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsComponentModule {}
