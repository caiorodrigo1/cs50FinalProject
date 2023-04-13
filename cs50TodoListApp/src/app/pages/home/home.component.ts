import { Component } from '@angular/core';

export interface PeriodicElement {
  task: string;
  position: number;
  author: string;
  done: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, task: 'Do breakfast', author: 'Caio', done: true },
  { position: 2, task: 'Go to gym', author: 'Caio', done: true },
  { position: 3, task: 'Drink water', author: 'Caio', done: false },
  { position: 4, task: 'Call Jhon Doe', author: 'Caio', done: false },
  { position: 5, task: 'Finish project', author: 'Caio', done: false },
  { position: 6, task: 'Read a book', author: 'Caio', done: false },
  { position: 7, task: 'Play PS5', author: 'Caio', done: false },
  { position: 8, task: 'Watch Breaking Bad', author: 'Caio', done: false },
  { position: 9, task: 'IDK', author: 'Caio', done: false },
  { position: 10, task: 'Sleep early', author: 'Caio', done: false },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
// export class HomeComponent {}
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
