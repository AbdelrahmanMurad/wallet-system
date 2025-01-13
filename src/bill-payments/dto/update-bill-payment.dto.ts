import { PartialType } from '@nestjs/mapped-types';
import { CreateBillPaymentDto } from './create-bill-payment.dto';

export class UpdateBillPaymentDto extends PartialType(CreateBillPaymentDto) {}
