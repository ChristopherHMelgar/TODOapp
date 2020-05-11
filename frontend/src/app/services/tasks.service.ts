import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(`${this.URL}/tasks`);
  }

  createTask(task) {
    return this.http.post<any>(`${this.URL}/tasks`, task);
  }

  updateTask(task) {
    return this.http.put<any>(`${this.URL}/tasks/${task._id}`, task);
  }

  deleteTask(_id) {
    return this.http.delete<any>(`${this.URL}/tasks/${_id}`)
  }
}
