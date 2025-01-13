import { Test, TestingModule } from '@nestjs/testing';
import { RechargeLogsService } from './recharge-logs.service';

describe('RechargeLogsService', () => {
  let service: RechargeLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RechargeLogsService],
    }).compile();

    service = module.get<RechargeLogsService>(RechargeLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
