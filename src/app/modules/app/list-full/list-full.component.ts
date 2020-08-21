import { Component, OnInit } from '@angular/core';
import {ListService} from '../../../services/list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-full',
  templateUrl: './list-full.component.html',
  styleUrls: ['./list-full.component.scss']
})
export class ListFullComponent implements OnInit {

    showCreateListModal = false;

    constructor(
        public listService: ListService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    openModal() {
        this.showCreateListModal = true;
    }
}
