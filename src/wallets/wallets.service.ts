import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class WalletsService {

  constructor(
    @InjectRepository(Wallet)
    private walletsRepo: Repository<Wallet>,
    private usersService: UsersService
  ) { }

  async createWallet(body: CreateWalletDto, user: User) {
    const wallet = this.walletsRepo.create(body);
    wallet.user = user;
    return await this.walletsRepo.save(wallet)
  }

  async walletActivation(walletId: number): Promise<Boolean> {
    const wallet = await this.walletsRepo.findOneBy({ id: walletId })
    if (!wallet) throw new NotFoundException('Wallet Not Found')
    console.log(wallet);


    wallet.isActive = 0; // Ensure wallet is not active

    console.log(wallet.user.id);
    const user = await this.usersService.findOneById(wallet.user.id); // !!!
    console.log(wallet.user.id);
    if (!user) throw new NotFoundException('User associated with the wallet not found.')
    if (!user.isVerified) throw new BadRequestException('User account is not verified.')

    wallet.isActive = 1;

    await this.walletsRepo.save(wallet);
    return true;
  }



  // findAll() {
  //   return `This action returns all wallets`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} wallet`;
  // }

  // update(id: number, updateWalletDto: UpdateWalletDto) {
  //   return `This action updates a #${id} wallet`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} wallet`;
  // }
}
