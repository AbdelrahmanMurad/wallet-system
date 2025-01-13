import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RechargePointsService } from './recharge-points.service';
import { CreateRechargePointDto } from './dto/create-recharge-point.dto';
import { UpdateRechargePointDto } from './dto/update-recharge-point.dto';

@Controller('recharge-points')
export class RechargePointsController {
  constructor(private readonly rechargePointsService: RechargePointsService) {}

  @Post()
  create(@Body() createRechargePointDto: CreateRechargePointDto) {
    return this.rechargePointsService.create(createRechargePointDto);
  }

  @Get()
  findAll() {
    return this.rechargePointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rechargePointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRechargePointDto: UpdateRechargePointDto) {
    return this.rechargePointsService.update(+id, updateRechargePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rechargePointsService.remove(+id);
  }
}
