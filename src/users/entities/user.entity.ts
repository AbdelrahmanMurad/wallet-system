// import { Wallet } from "src/wallets/entities/wallet.entity";
import { Wallet } from "../../wallets/entities/wallet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    nationalId: string;

    @Column({ unique: true })
    phoneNumber: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: false })
    isVerified: boolean;

    @Column({ default: true })
    admin: boolean;

    @Column({ default: () => 'CURRENT_TIMESTAMP' }) // Automatically set creation timestamp
    createdAt: Date;

    @OneToMany(() => Wallet, (wallet) => wallet.user)
    wallets: Wallet[];
}