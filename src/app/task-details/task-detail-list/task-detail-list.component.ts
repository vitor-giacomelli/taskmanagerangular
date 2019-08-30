import { Component, OnInit } from '@angular/core';
import { TaskDetailService } from 'src/app/shared/task-detail.service';
import { TaskDetail } from 'src/app/shared/task-detail.model';

@Component({
  selector: 'app-task-detail-list',
  templateUrl: './task-detail-list.component.html',
  styles: []
})
export class TaskDetailListComponent implements OnInit {

  constructor(private service : TaskDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(td: TaskDetail){
    this.service.formData = Object.assign({}, td);
    
  }

}
