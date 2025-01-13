import { Injectable } from '@nestjs/common';
import { CreateRechargePointDto } from './dto/create-recharge-point.dto';
import { UpdateRechargePointDto } from './dto/update-recharge-point.dto';

@Injectable()
export class RechargePointsService {
  create(createRechargePointDto: CreateRechargePointDto) {
    return 'This action adds a new rechargePoint';
  }

  findAll() {
    return `This action returns all rechargePoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rechargePoint`;
  }

  update(id: number, updateRechargePointDto: UpdateRechargePointDto) {
    return `This action updates a #${id} rechargePoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} rechargePoint`;
  }
}
