import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasksTable1664386626447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "content",
            type: "varchar",
          },
          {
            name: "isDone",
            type: "boolean",
            default: false,
          },
          {
            name: "author",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}
