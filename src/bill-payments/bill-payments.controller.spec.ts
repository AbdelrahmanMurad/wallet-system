import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentsController } from './bill-payments.controller';
import { BillPaymentsService } from './bill-payments.service';

describe('BillPaymentsController', () => {
  let controller: BillPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillPaymentsController],
      providers: [BillPaymentsService],
    }).compile();

    controller = module.get<BillPaymentsController>(BillPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
