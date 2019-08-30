import { Component, OnInit } from '@angular/core';
import { TaskDetailService } from 'src/app/shared/task-detail.service';
import { NgForm } from '@angular/forms';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styles: []
})
export class TaskDetailComponent implements OnInit {

  constructor(private service: TaskDetailService) { }

  ngOnInit() {
    
  }

  resetForm(form:NgForm){
    if (form != null)
    {
      form.resetForm();
    }

  }

  onSubmit(form:NgForm){
    this.service.PostTask(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
  }
}
