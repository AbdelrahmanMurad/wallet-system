import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet]), UsersModule], //$ Import UsersModule to use UsersService
  controllers: [WalletsController],
  providers: [WalletsService],
  exports: [WalletsService],  //$ Make WalletsService available to other modules
})
export class WalletsModule { }