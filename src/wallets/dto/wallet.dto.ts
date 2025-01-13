import { Expose, Transform } from "class-transformer";

export class WalletDto {
    @Expose()
    id: number;

    @Expose()
    balance: number;

    @Expose()
    isActive: boolean;

    @Expose()
    @Transform(({ obj }) => obj.user.id)
    userId: number;
}