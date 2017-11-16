import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WordsService {
    words: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {
        this.words = this.db.list('/words');
     }

    getWords(){
        return this.words;
    }

    getWordByKey(key){
        return this.db.object('/words/' + key);
    }

    addWord(word){
        return this.words.push(word);
    }

    getNewId(){
        return this.db.app.database().ref().push();
    }

    deleteWord(wordId){
        return this.words.remove(wordId);
    }

    updateWord($key, word){
        return this.words.update($key, word);
    }
}
