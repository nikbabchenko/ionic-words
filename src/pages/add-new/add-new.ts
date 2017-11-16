import { Component, ViewChild } from '@angular/core';
import { WordsService } from '../../shared/words.service';
import { LoadingController, NavController } from 'ionic-angular';
import { DetailsComponent } from '../details/details';

/**
 * Generated class for the AddNewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html'
})
export class AddNewComponent {
  @ViewChild('f') element;

  isDataSending: any;
  loading: any;
  words: any;
  word = {
    name: '',
    translate: ''
  };
  error: string;

  constructor(
    private wordsService: WordsService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController) {
  }

  ngOnInit() {
    this
      .wordsService
      .getWords()
      .subscribe(data => this.words = data);
  }


  addNewItem(){
    if (this.words && this.words.find(item => this.word.name.toLowerCase().trim() === item.name.toLowerCase().trim())) {
      this.error = 'this word exists';
      return;
    }

    this.isDataSending = true;
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        spinner: 'crescent'
      });

    this.loading.present();

    this
      .wordsService
      .addWord(this.word)
      .then(data => {
        this.isDataSending = false;
        this.reset();
        this.navCtrl.push(DetailsComponent, {
          key: data.key
        });
        this.loading.dismiss();
      })
      .catch(e => {
        this.loading.dismiss();
      })
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
