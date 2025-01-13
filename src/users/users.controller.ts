import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Session, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto } from "./dto/sign-up.dto";
import { AuthService } from './auth.service';
import { LogInDto } from './dto/log-in.dto';
import { ResetPassDto } from './dto/reset-pass.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './entities/user.entity';
import { UserGuard } from 'src/guards/user.guard';
import { UpdateUserDto } from './dto/update.dto';
import { Admin } from 'typeorm';
import { AdminGuard } from 'src/guards/admin.guard';

@Controller('auth')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) { }

  @Post('/register')
  async register(@Body() body: SignUpDto, @Session() session: any, @CurrentUser() currentUser: User) {
    const user = await this.authService.signUp(body);
    session.userId = user.id;
    // console.log(session.userId);
    console.log(`Register user`);
    console.log(currentUser);
    return user;
  }

  @Post('logIn')
  async logIn(@Body() body: LogInDto, @Session() session: any, @CurrentUser() currentUser: User) {
    const user = await this.authService.logIn(body);
    session.userId = user.id;
    // console.log(session.userId);
    console.log(`Logged in user`);
    console.log(currentUser);
    return user;
  }

  @UseGuards(UserGuard)
  @Post('verify/:id')
  async verifyAccount(@Param('id') id: string) {
    const user = await this.usersService.findOneById(+id);
    if (!user) throw new NotFoundException('User not found.');
    user.isVerified = true;
    await this.usersService.update(+id, user);
    return { message: 'Account verified successfully.' };
  }

  @UseGuards(UserGuard)
  @Post('/resetPassword')
  async reset(@Body() body: ResetPassDto) {
    const user = await this.authService.resetPassword(body);
    //    session.userId = user.id;
    return user;
  }

  @UseGuards(UserGuard)
  @Post('logOut')
  logOut(@Session() session: any, @CurrentUser() currentUser: User) {
    // console.log(`Logged out user`);
    // console.log(currentUser);
    // console.log(session.userId);
    session.userId = null;
    // console.log(`Logged out user`);
    // console.log(currentUser);
    // console.log(session.userId);
    return "Logged out successfully";
  }

  @UseGuards(UserGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(+id, body);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
