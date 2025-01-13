import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MinLength } from "class-validator";

export class UpdateUserDto {
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    nationalId: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Matches(/^\+?[0-9]{10,15}$/, { message: 'Phone number must be between 10 and 15 digits and can include a country code' })
    phoneNumber: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}