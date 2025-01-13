import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const connectionSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
    migrations: [join(__dirname, '.', 'database', 'migrations', '*.{ts,js}')],
    logging: true,
    synchronize: false,
    migrationsTableName: 'typeorm_migrations',
    migrationsRun: false,
});