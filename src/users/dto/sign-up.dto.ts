import { IsEmail, IsString, MinLength, Matches, IsNotEmpty } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    nationalId: string;

    @IsNotEmpty()
    @Matches(/^\+?[0-9]{10,15}$/, { message: 'Phone number must be between 10 and 15 digits and can include a country code' })
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?& ]{8,}$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' })
    password: string;
}