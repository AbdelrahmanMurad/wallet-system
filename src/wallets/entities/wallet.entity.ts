// import { User } from "src/users/entities/user.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('wallets')
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    balance: number;

    @Column({ type: 'tinyint', default: 0 }) // Default to inactive
    isActive: number;

    @ManyToOne(() => User, (user) => user.wallets)
    user: User;
}