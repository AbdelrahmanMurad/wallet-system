import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentsService } from './bill-payments.service';

describe('BillPaymentsService', () => {
  let service: BillPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillPaymentsService],
    }).compile();

    service = module.get<BillPaymentsService>(BillPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
