import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    allLists$: Observable<any>;
    allLists: Subject<any> = new Subject<any>();
    arrayOfLists: Array<object>;
    currentList: string;

    constructor(
        private db: AngularFireDatabase
    ) {}

    getAllLists() {
        this.allLists$ = this.db.list('lists').valueChanges();
        this.allLists$.subscribe(data => {
            this.arrayOfLists = data;
            this.allLists.next(data);
        });
    }

    addList(newList) {
        return this.db.list('lists').push(newList);
    }

    addRecord(newRecord) {
        // let key;
        // this.arrayOfLists.filter(item => {
        //     if (item.listName === this.currentList.listName) {
        //         key = item.key;
        //     }
        // });
        // console.log(key)
        // this.db.list(`lists/${key}/records`).push(newRecord);
        console.log(this.db.list('lists'))
        this.db.object('lists').update({records: 'ololol'})
    }
}
