import { Component, OnInit } from '@angular/core';
import {ListService} from '../../../services/list.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-full',
  templateUrl: './list-full.component.html',
  styleUrls: ['./list-full.component.scss']
})
export class ListFullComponent implements OnInit {

    showModal = false;
    addRecordForm: FormGroup;
    allLists: Array<any>;

    constructor(
        public listService: ListService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.addRecordForm = new FormGroup({
            title: new FormControl(null, [Validators.required]),
            author: new FormControl(null, []),
            img: new FormControl(null, []),
            rating: new FormControl(null, []),
            description: new FormControl(null, [])
        });

        this.listService.allLists.subscribe(data => {
            this.allLists = data;
            console.log(this.allLists);
        });
    }

    openModal() {
        this.showModal = true;
    }

    addRecord() {
        this.listService.addRecord(this.addRecordForm.value);
        this.showModal = false;
    }

    update() {

    }
}
