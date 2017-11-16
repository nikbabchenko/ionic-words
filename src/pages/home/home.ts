import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { WordsService } from '../../shared/words.service';
import { DetailsComponent } from '../details/details';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public names: String[] = [];

  items = [];
  itemsList = [];
  englishWords: any;
  subscribtion: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    private wordsService: WordsService,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit(){
    this.loading = this.loadingCtrl.create({
        content: 'Getting Your Words...',
        spinner: 'crescent'
      });

    this.loading.present();

    this.subscribtion = this.initItems();
  }

  initItems() {
    return this
      .wordsService
      .getWords()
      .subscribe(data => {
        this.items = data;
        this.loading.dismiss()
        this.itemsList = data.sort((first, second) => {
          if (first.name > second.name) {
            return 1;
          }

          if (first.name < second.name)  {
            return -1;
          }

          return 0;
        });

        this.englishWords = this.items.slice();
      }, e => this.loading.dismiss());
  }

  getItems(event){
    this.itemsList = [];
    const searchValue = event.target.value;

    if (!searchValue) {
      this.itemsList = this.items.slice();
      return;
    }

    this.englishWords.forEach((item) =>{
      if (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 || item.translate.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
        this.itemsList.push(item);
      };
    });
  }

  itemSelected(item){
    this.navCtrl.push(DetailsComponent, {
      key: item.$key
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
