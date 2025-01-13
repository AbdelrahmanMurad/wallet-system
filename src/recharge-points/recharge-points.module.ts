import { Module } from '@nestjs/common';
import { RechargePointsService } from './recharge-points.service';
import { RechargePointsController } from './recharge-points.controller';

@Module({
  controllers: [RechargePointsController],
  providers: [RechargePointsService],
})
export class RechargePointsModule {}
