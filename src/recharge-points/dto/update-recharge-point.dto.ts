import { PartialType } from '@nestjs/mapped-types';
import { CreateRechargePointDto } from './create-recharge-point.dto';

export class UpdateRechargePointDto extends PartialType(CreateRechargePointDto) {}
