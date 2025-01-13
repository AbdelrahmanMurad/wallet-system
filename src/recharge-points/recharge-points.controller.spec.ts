import { Test, TestingModule } from '@nestjs/testing';
import { RechargePointsController } from './recharge-points.controller';
import { RechargePointsService } from './recharge-points.service';

describe('RechargePointsController', () => {
  let controller: RechargePointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RechargePointsController],
      providers: [RechargePointsService],
    }).compile();

    controller = module.get<RechargePointsController>(RechargePointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
