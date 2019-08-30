import { Component, OnInit } from '@angular/core';
import { TaskDetailService } from 'src/app/shared/task-detail.service';
import { TaskDetail } from 'src/app/shared/task-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-detail-list',
  templateUrl: './task-detail-list.component.html',
  styles: []
})
export class TaskDetailListComponent implements OnInit {

  constructor(private service : TaskDetailService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(td: TaskDetail){
    this.service.formData = Object.assign({}, td);    
  }

  onDelete(id){
    if (confirm('Tem certeza que deseja excluir este registro?')){
    this.service.DeleteTask(id)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deletado com sucesso', 'Task Scheduler Application')
    }, err => {
      console.log(err);
    })
  }
}

}
