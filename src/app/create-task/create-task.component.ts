import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  itemDscr = '';
  storeService: StoreService;
  constructor() {
    this.storeService = StoreService.getInstance();
  }
  ngOnInit() {
  }
  addItem() {
    this.storeService.storeData(this.itemDscr);
    this.itemDscr = '';
  }
}
