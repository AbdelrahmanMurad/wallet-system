import { Test, TestingModule } from '@nestjs/testing';
import { RechargeLogsController } from './recharge-logs.controller';
import { RechargeLogsService } from './recharge-logs.service';

describe('RechargeLogsController', () => {
  let controller: RechargeLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RechargeLogsController],
      providers: [RechargeLogsService],
    }).compile();

    controller = module.get<RechargeLogsController>(RechargeLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
