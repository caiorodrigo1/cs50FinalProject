export class Task {
  constructor(
    public isDone?: boolean,
    public content?: string,
    public id?: string,
    public author?: string
  ) {}
}
