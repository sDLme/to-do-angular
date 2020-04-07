import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {

  items = [];
  storeService: StoreService;

  constructor( ) {
    this.storeService = StoreService.getInstance();
    this.items = this.storeService.getItems();
  }

  deleteItem(index) {
    this.storeService.deleteItem(index);
  }
}
