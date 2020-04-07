import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StoreService} from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements  OnInit {
  service: StoreService;
  ngOnInit() {
    this.service = new StoreService();
  }
}
