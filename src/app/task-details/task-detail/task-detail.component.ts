import { Component, OnInit } from '@angular/core';
import { TaskDetailService } from 'src/app/shared/task-detail.service';
import { NgForm } from '@angular/forms';
import { Identifiers } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styles: []
})
export class TaskDetailComponent implements OnInit {

  constructor(private service: TaskDetailService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if (form != null)
    {
      form.resetForm();
      this.service.refreshList();
      
    }
    this.service.formData = {
      Id : 0,
      Descricao : '',
      Status : false,
      Titulo : ''

    }

  }

  onSubmit(form:NgForm){
    
    if (this.service.formData.Id == 0){

      this.insertRecord(form);
    }
else{
  this.updateRecord(form);
  }
}

insertRecord(form: NgForm){
  this.service.PostTask().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Enviado com sucesso', 'Task Scheduler Application')
    },
    err => {
      console.log(err);
    }
  );
}
updateRecord(form: NgForm){
  this.service.PutTask().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Atualizado com sucesso', 'Task Scheduler Application')
    },
    err => {
      console.log(err);
    }
  );
}
}
