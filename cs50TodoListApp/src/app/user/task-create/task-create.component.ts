import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../shared/tasks.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  public formTask: FormGroup;

  @Output() newTask: EventEmitter<Task> = new EventEmitter();

  constructor(private fb: FormBuilder, private tasksService: TasksService) {
    this.formTask = this.buildFormTask();
  }

  ngOnInit(): void {}

  private buildFormTask(): FormGroup {
    return this.fb.group({
      content: [null, [Validators.required]],
      author: [null, [Validators.required]],
    });
  }

  public saveNewTask(): void {
    const newTask: Task = this.formTask.value as Task;

    this.tasksService.saveNew(newTask).subscribe(
      (res) => {
        this.formTask.reset();
        this.newTask.emit(res);
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
