import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewComponent } from './add-new';

@NgModule({
  declarations: [
    AddNewComponent,
  ],
  imports: [
    IonicPageModule.forChild(AddNewComponent),
  ],
  exports: [
    AddNewComponent
  ]
})
export class AddNewComponentModule {}
