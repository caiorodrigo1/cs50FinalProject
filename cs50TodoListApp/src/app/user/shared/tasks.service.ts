import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  public saveNew(newTask: Task): Observable<Task> {
    const url = `${environment.baseUrlBackend}/tasks`;

    return this.http.post(url, newTask).pipe(map(this.mapToTask));
  }

  public delete(id: string): Observable<any> {
    const url = `${environment.baseUrlBackend}/tasks/${id}`;
    return this.http.delete(url, { responseType: 'json' });
  }

  public markDone(id: string): Observable<any> {
    console.log('id no serv: ', id);
    const url = `${environment.baseUrlBackend}/tasks/done/${id}`;
    return this.http.patch(url, { responseType: 'json' });
  }

  private mapToTasks(data: any): Array<Task> {
    const listTasks: Task[] = [];

    data.forEach((e: any) => listTasks.push(Object.assign(new Task(), e)));

    return listTasks;
  }

  private mapToTask(data: any): Task {
    return Object.assign(new Task(), data);
  }
}
