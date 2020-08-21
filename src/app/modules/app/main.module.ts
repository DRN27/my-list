import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ListItemComponent } from './list-item/list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ListFullComponent } from './list-full/list-full.component';



@NgModule({
  declarations: [
    MainComponent,
    ListItemComponent,
    ListFullComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path: 'list/:name', component: ListFullComponent}
        ])
    ],
  exports: [
      MainComponent,
      ListItemComponent,
      RouterModule
  ]
})
export class MainModule { }
