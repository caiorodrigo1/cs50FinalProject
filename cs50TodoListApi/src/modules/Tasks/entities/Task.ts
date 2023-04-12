import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tasks")
class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  isDone: boolean;

  @Column()
  author: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
