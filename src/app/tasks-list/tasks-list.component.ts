import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  items = [];
  storeService: StoreService;

  constructor( ) {
    this.storeService = StoreService.getInstance();
    this.items = this.storeService.getItems();
  }

  ngOnInit(): void {
    console.log(this.items);
  }

  deleteItem(index) {
    this.storeService.deleteItem(index);
  }
}
