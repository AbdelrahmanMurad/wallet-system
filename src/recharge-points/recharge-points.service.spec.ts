import { Test, TestingModule } from '@nestjs/testing';
import { RechargePointsService } from './recharge-points.service';

describe('RechargePointsService', () => {
  let service: RechargePointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RechargePointsService],
    }).compile();

    service = module.get<RechargePointsService>(RechargePointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
