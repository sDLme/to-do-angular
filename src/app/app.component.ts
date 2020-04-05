import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements  OnInit{

  itemDscr = '';
  items = [];
  itemObj = {};
  ngOnInit() {
    this.items = localStorage.getItem('my-app-to-do') ? JSON.parse(localStorage.getItem('my-app-to-do')) : [];
    localStorage.setItem('my-app-to-do', JSON.stringify(this.items));
  }
  addItem() {
    if (this.itemDscr) {
      this.itemObj = {
        itemDscr: this.itemDscr
      };
      this.items.push(this.itemObj);
      localStorage.setItem('my-app-to-do', JSON.stringify(this.items));
      this.items = JSON.parse(localStorage.getItem('my-app-to-do'));
      this.itemDscr = '';
    }
  }

  deleteItem(index) {
    this.items.splice(index, 1);
    localStorage.setItem('my-app-to-do', JSON.stringify(this.items));
  }
}
