import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/user/login/login.service';
import { TasksService } from 'src/app/user/shared/tasks.service';
import { environment } from 'src/environments/environment';

export interface Task {
  id: string;
  isDone: boolean;
  content: string;
  author: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['isDone', 'content', 'author', 'actions'];
  dataSource: Task[] = [];

  constructor(
    public loginService: LoginService,
    private router: Router,
    private http: HttpClient,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.getTasks().subscribe((tasks: Task[]) => {
      this.dataSource = tasks;
    });
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.baseUrlBackend}/tasks`);
  }

  markAsDone(task: any) {
    this.tasksService.markDone(task.id).subscribe(
      (res) => {
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteTask(task: any) {
    this.tasksService.delete(task.id).subscribe(
      (res) => {
        this.dataSource = this.dataSource.filter((e) => e.id !== task.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isLoggedIn(): boolean {
    return this.loginService.isAuthenticated();
  }

  onLogout(): void {
    this.loginService.logout();
  }
}
