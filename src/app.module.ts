import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { RechargePointsModule } from './recharge-points/recharge-points.module';
import { RechargeLogsModule } from './recharge-logs/recharge-logs.module';
import { AuditLogModule } from './audit-log/audit-log.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BillPaymentsModule } from './bill-payments/bill-payments.module';
import { CompanyModule } from './company/company.module';
import { join } from 'node:path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    WalletsModule,
    RechargePointsModule,
    RechargeLogsModule,
    AuditLogModule,
    TransactionsModule,
    BillPaymentsModule,
    CompanyModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        database: configService.get('DB_NAME'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        logging: true,
        synchronize: false,
        migrationsTableName: 'typeorm_migrations',
        migrationsRun: false,
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
