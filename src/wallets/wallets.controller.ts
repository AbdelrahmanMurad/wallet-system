import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards, NotFoundException, BadRequestException } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { UserGuard } from 'src/guards/user.guard';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { WalletDto } from './dto/wallet.dto';

@Controller('wallets')
@UseGuards(UserGuard)
@Serialize(WalletDto)
export class WalletsController {
  constructor(
    private readonly walletsService: WalletsService
  ) { }


  @Post()
  async create(@Body() body: CreateWalletDto, @CurrentUser() user: User) {
    try {
      const wallet = await this.walletsService.createWallet(body, user);
      return { message: 'Wallet created successfully', wallet };
    } catch (error) {
      throw new HttpException('Wallet cannot be created', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('activateWallet/:id')
  async walletActivation(@Param('id') id: string) {
    try {
      await this.walletsService.walletActivation(+id);
      return { message: 'Wallet activated successfully' };
    } catch (error) {
      // Log the error for debugging
      console.error('Error activating wallet:', error);

      // Check the type of error and return a more specific message
      if (error instanceof NotFoundException) {
        throw new HttpException('Wallet or user not found', HttpStatus.NOT_FOUND);
      } else if (error instanceof BadRequestException) {
        throw new HttpException('User is not verified', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException('Wallet cannot be activated', HttpStatus.BAD_REQUEST);
      }
    }
  }




  // @Get()
  // findAll() {
  //   return this.walletsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.walletsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
  //   return this.walletsService.update(+id, updateWalletDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.walletsService.remove(+id);
  // }
}
