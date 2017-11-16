import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';

import {
  AddNewComponent,
  DetailsComponent,
  HomePage,
  TabsPage,
  EditComponent
} from '../pages/index';

import { capitalizeLetterPipe } from '../pipes/capitalizeLetter.pipe';

import { WordsService } from '../shared/words.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from  './firebaseConfig';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    capitalizeLetterPipe,
    AddNewComponent,
    DetailsComponent,
    EditComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddNewComponent,
    DetailsComponent,
    EditComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordsService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
