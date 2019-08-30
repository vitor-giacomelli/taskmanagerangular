import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDetailComponent } from './task-details/task-detail/task-detail.component';
import { TaskDetailListComponent } from './task-details/task-detail-list/task-detail-list.component';
import { TaskDetailService } from './shared/task-detail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    TaskDetailComponent,
    TaskDetailListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TaskDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
