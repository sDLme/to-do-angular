import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private static instance: StoreService;
  private  items: object[] = [];

  public static getInstance(): StoreService {
    if (!StoreService.instance) {
      StoreService.instance = new StoreService();
    }

    return StoreService.instance;
  }
  constructor() {
    this.restore();
  }
  storeData( desc: string) {
    this.items.push({ desc });
    this.store();
  }
  store() {
    localStorage.setItem('my-app-to-do', JSON.stringify(this.items));
  }
  restore() {
    if (localStorage['my-app-to-do']) {
      this.items = JSON.parse(localStorage.getItem('my-app-to-do'));
    } else {
      this.items = [];
    }
  }
  getItems() {
    return this.items;
  }
  deleteItem(index){
    this.items.splice(index, 1);
    this.store();
  }
}
