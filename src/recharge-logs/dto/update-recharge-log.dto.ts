import { PartialType } from '@nestjs/mapped-types';
import { CreateRechargeLogDto } from './create-recharge-log.dto';

export class UpdateRechargeLogDto extends PartialType(CreateRechargeLogDto) {}
