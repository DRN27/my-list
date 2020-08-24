import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../../../services/list.service';
import {Router} from '@angular/router';


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
	    this.addListForm = new FormGroup({
           listName: new FormControl(null, [Validators.required])
        });
	}

	ngOnInit(): void {
        this.listService.getAllLists();
        this.subscription = this.listService.allLists.subscribe(data => {
            this.allLists = data;
        });
	}

	openModal() {
	    this.addListForm.reset();
        this.showCreateListModal = true;
    }

	async addList() {
	    const data = this.addListForm.value;
	    data.records = ['test'];
	    const res = await this.listService.addList(data);
	    this.allLists.filter(item => {
            if (item.listName === this.addListForm.value.listName) {
                item.key = res.key;
            }
        });
        this.showCreateListModal = false;
	}

	openList(title) {
	    this.listService.currentList = title;
        this.router.navigate([`list/${title}`]);
    }

    ngOnDestroy(): void {
	    this.subscription.unsubscribe();
    }

}
