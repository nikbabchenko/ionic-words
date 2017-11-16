import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../shared/words.service';
import { NavParams } from 'ionic-angular';
import { LoadingController, NavController } from 'ionic-angular';
import { Location } from '@angular/common';
import { EditComponent } from '../index';

/**
 * Generated class for the DetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsComponent implements OnInit {
  item: any;
  words: Array<any>;
  subscribtion: any;
  loading: any;
  key: any;

  constructor(
    private wordsService: WordsService,
    private navParams: NavParams,
    private location: Location,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController) {

  }
  ngOnInit() {
    this.key = this.navParams.get('key') ? this.navParams.get('key') : 1;
    this.subscribtion = this.initItem(this.key);
  }

  goToEdit(){
    this.navCtrl.push(EditComponent, {
      key: this.key
    });
  }

  deleteItem(){
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        spinner: 'crescent'
      });

    this.loading.present();

    this
      .wordsService
      .deleteWord(this.item.$key)
      .then((e) => {
        this.loading.dismiss();
        this.navCtrl.popToRoot();
      })
      .catch(e => this.loading.dismiss());
  }

  initItem(key){
    return this
      .wordsService
      .getWordByKey(key)
      .subscribe((data) => {
        this.item = data;
      });
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
