import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditComponent } from './edit';

@NgModule({
  declarations: [
    EditComponent,
  ],
  imports: [
    IonicPageModule.forChild(EditComponent),
  ],
  exports: [
    EditComponent
  ]
})
export class EditComponentModule {}
