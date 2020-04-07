import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { StoreService } from './store.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    CreateTaskComponent,
    TasksListComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        NoopAnimationsModule,
        MatIconModule,
    ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
