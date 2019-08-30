import { Injectable } from '@angular/core';
import { TaskDetail } from './task-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {
  formData: TaskDetail;
  readonly rootURL = 'https://localhost:44343/api';
  constructor(private http:HttpClient) { }

  PostTask(formData: TaskDetail){
    return this.http.post(this.rootURL + '/Tasks',formData);
  }
}
