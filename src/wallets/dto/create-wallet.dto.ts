import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateWalletDto {

    @IsNotEmpty()
    @IsNumber()
    balance: number = 0;

    @IsNotEmpty()
    @IsNumber()
    isActive: number = 0;
}