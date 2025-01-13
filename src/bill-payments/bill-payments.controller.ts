import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillPaymentsService } from './bill-payments.service';
import { CreateBillPaymentDto } from './dto/create-bill-payment.dto';
import { UpdateBillPaymentDto } from './dto/update-bill-payment.dto';

@Controller('bill-payments')
export class BillPaymentsController {
  constructor(private readonly billPaymentsService: BillPaymentsService) {}

  @Post()
  create(@Body() createBillPaymentDto: CreateBillPaymentDto) {
    return this.billPaymentsService.create(createBillPaymentDto);
  }

  @Get()
  findAll() {
    return this.billPaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billPaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillPaymentDto: UpdateBillPaymentDto) {
    return this.billPaymentsService.update(+id, updateBillPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billPaymentsService.remove(+id);
  }
}
