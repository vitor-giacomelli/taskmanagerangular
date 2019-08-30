import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDetailComponent } from './task-details/task-detail/task-detail.component';
import { TaskDetailListComponent } from './task-details/task-detail-list/task-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    TaskDetailComponent,
    TaskDetailListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
