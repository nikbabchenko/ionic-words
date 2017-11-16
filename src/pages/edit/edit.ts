import { Component, ViewChild, OnInit } from '@angular/core';
import { WordsService } from '../../shared/words.service';
import { LoadingController } from 'ionic-angular';
import { NavParams, NavController } from 'ionic-angular';
/**
 * Generated class for the EditComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'edit',
  templateUrl: 'edit.html'
})
export class EditComponent implements OnInit {
  key: any;
  subscribtion: any;
  @ViewChild('f') element;
  isDataSending: any;
  loading: any;
  word = {
    name: '',
    $key: '',
    translate: ''
  };

  constructor(
    private wordsService: WordsService,
    private loadingCtrl: LoadingController,
    private navParams: NavParams,
    private navCtrl: NavController) {
  }

  ngOnInit() {
    this.key = this.navParams.get('key') ? this.navParams.get('key') : 1;
    this.subscribtion = this.initItem(this.key);
  }

  changeItem(){
    this.isDataSending = true;
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        spinner: 'crescent'
      });

    this.loading.present();

    this
      .wordsService
      .updateWord(this.key, {
        name: this.word.name,
        translate: this.word.translate
      })
      .then(data => {
        this.isDataSending = false;
        this.reset();
        this.loading.dismiss();
        this.navCtrl.pop();
      })
      .catch(e => {
        this.loading.dismiss();
        this.navCtrl.pop();
      })
  }

  initItem(key){
    return this
      .wordsService
      .getWordByKey(key)
      .subscribe((data) => {
        this.word = data;
      });
  }

  reset(){
    this.word.name = '';
    this.word.translate = '';
    this.element.reset();
  }

  isSubmitDisabled(){
    return !(this.word.name && this.word.translate && !this.isDataSending);
  }
}
