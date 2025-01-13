import { Injectable } from '@nestjs/common';
import { CreateBillPaymentDto } from './dto/create-bill-payment.dto';
import { UpdateBillPaymentDto } from './dto/update-bill-payment.dto';

@Injectable()
export class BillPaymentsService {
  create(createBillPaymentDto: CreateBillPaymentDto) {
    return 'This action adds a new billPayment';
  }

  findAll() {
    return `This action returns all billPayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billPayment`;
  }

  update(id: number, updateBillPaymentDto: UpdateBillPaymentDto) {
    return `This action updates a #${id} billPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} billPayment`;
  }
}
