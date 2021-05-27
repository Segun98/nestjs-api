import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnTestBoy1609635540633 implements MigrationInterface {
    name = 'addColumnTestBoy1609635540633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "saved" TO "testboy"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "testboy" TO "saved"`);
    }

}
