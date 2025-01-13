import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1735398955911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nationalId',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'phoneNumber',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name:'password',
                        type: 'varchar'
                    },
                    {
                        name: 'isVerified',
                        type: 'boolean',
                        default: false,
                    },
                    {
                        name: 'admin',
                        type: 'boolean',
                        default: true,
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}