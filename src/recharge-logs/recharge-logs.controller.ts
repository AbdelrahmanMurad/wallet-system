import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RechargeLogsService } from './recharge-logs.service';
import { CreateRechargeLogDto } from './dto/create-recharge-log.dto';
import { UpdateRechargeLogDto } from './dto/update-recharge-log.dto';

@Controller('recharge-logs')
export class RechargeLogsController {
  constructor(private readonly rechargeLogsService: RechargeLogsService) {}

  @Post()
  create(@Body() createRechargeLogDto: CreateRechargeLogDto) {
    return this.rechargeLogsService.create(createRechargeLogDto);
  }

  @Get()
  findAll() {
    return this.rechargeLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rechargeLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRechargeLogDto: UpdateRechargeLogDto) {
    return this.rechargeLogsService.update(+id, updateRechargeLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rechargeLogsService.remove(+id);
  }
}
