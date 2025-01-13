import { Injectable } from '@nestjs/common';
import { CreateRechargeLogDto } from './dto/create-recharge-log.dto';
import { UpdateRechargeLogDto } from './dto/update-recharge-log.dto';

@Injectable()
export class RechargeLogsService {
  create(createRechargeLogDto: CreateRechargeLogDto) {
    return 'This action adds a new rechargeLog';
  }

  findAll() {
    return `This action returns all rechargeLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rechargeLog`;
  }

  update(id: number, updateRechargeLogDto: UpdateRechargeLogDto) {
    return `This action updates a #${id} rechargeLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} rechargeLog`;
  }
}
