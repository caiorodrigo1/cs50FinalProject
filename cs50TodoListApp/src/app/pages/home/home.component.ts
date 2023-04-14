import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/user/login/login.service';
import { environment } from 'src/environments/environment';

export interface Task {
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
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTasks().subscribe((tasks: Task[]) => {
      this.dataSource = tasks;
    });
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.baseUrlBackend}/tasks`);
  }

  markAsDone(id: string) {
    return this.http
      .patch(`${environment.baseUrlBackend}/tasks/done/${id}, body: any`)
      .subscribe(
        () => {},
        (error) => {
          console.error('Error marking task as done', error);
        }
      );
  }

  editTask(task: any) {
    // Open a dialog to edit the task
  }

  deleteTask(task: any) {
    // Make an HTTP request to delete the task
  }

  isLoggedIn(): boolean {
    return this.loginService.isAuthenticated();
  }

  onLogout(): void {
    this.loginService.logout();
  }
}
