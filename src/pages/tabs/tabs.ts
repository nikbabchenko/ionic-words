import { Component } from '@angular/core';
import {
  HomePage,
  AddNewComponent
} from '../index';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddNewComponent;

  constructor() {

  }
}
