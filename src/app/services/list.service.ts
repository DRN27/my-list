import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    allLists$: Observable<any>;
    allLists: Subject<any> = new Subject<any>();

    constructor(
        private db: AngularFireDatabase
    ) {}

    getAllLists() {
        this.allLists$ = this.db.list('lists').valueChanges();
        this.allLists$.subscribe(data => {
            this.allLists.next(data);
        });
    }

    addList(newList) {
        this.db.list('/lists').push(newList.listName);
    }
}
