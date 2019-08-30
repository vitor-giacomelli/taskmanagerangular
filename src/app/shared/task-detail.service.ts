import { Injectable } from '@angular/core';
import { TaskDetail } from './task-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {
  formData: TaskDetail;
  readonly rootURL = 'https://localhost:44343/api';
  list : TaskDetail[];
  constructor(private http:HttpClient) { }

  PostTask(){
    return this.http.post(this.rootURL + '/Tasks',this.formData);
  }
  PutTask(){
    return this.http.put(this.rootURL + '/Tasks/' + this.formData.id ,this.formData);
  }
  DeleteTask(id){
    return this.http.delete(this.rootURL + '/Tasks/' + id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Tasks')
    .toPromise()
    .then(res => this.list = res as TaskDetail[])
  }


}
