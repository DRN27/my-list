import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../../../services/list.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {loggedIn} from '@angular/fire/auth-guard';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

	showCreateListModal = false;
	addListForm: FormGroup;
	allLists;
	subscription;

	constructor(
	    public listService: ListService,
        private router: Router
    ) {
	    this.listService.getAllLists();
	    this.subscription = this.listService.allLists.subscribe(data => {
            this.allLists = data;
        });
	    this.addListForm = new FormGroup({
           listName: new FormControl(null, [Validators.required])
        });
	}

	ngOnInit(): void {
	}

	openModal() {
	    this.addListForm.reset();
        this.showCreateListModal = true;
    }

	addList() {
	    this.listService.addList(this.addListForm.value);
        this.showCreateListModal = false;
	}

	openList(title) {
        this.router.navigate([`list/${title}`]);
    }

    ngOnDestroy(): void {
	    this.subscription.unsubscribe();
    }

}
