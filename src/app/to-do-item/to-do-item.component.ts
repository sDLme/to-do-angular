import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToDoItemComponent {

  @Input() idx: number;
  @Input() taskItem: [];
  @Output('onDelete') del: EventEmitter<any> = new EventEmitter<any>();
  delete() {
    this.del.emit(this.idx);
  }

}
