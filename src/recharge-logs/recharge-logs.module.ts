import { Module } from '@nestjs/common';
import { RechargeLogsService } from './recharge-logs.service';
import { RechargeLogsController } from './recharge-logs.controller';

@Module({
  controllers: [RechargeLogsController],
  providers: [RechargeLogsService],
})
export class RechargeLogsModule {}
