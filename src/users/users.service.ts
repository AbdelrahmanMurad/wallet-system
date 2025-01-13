import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SignUpDto } from "./dto/sign-up.dto";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EmailService } from './email.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private emailService: EmailService
  ) { }

  async register(body: SignUpDto): Promise<User> {
    const { nationalId, phoneNumber, email, password } = body;

    const existingUser = await this.findOneByEmail(email);
    if (existingUser) throw new BadRequestException("Email is already in use.");

    // if (this.find({ phoneNumber })) {
    //   throw new BadRequestException("Phone number is already in use.");
    // }

    const user = this.repo.create({ nationalId, phoneNumber, email, password });
    await this.repo.save(user);

    const verificationLink = `http://localhost:3000/users/verify/${user.id}`;
    await this.emailService.sendVerificationEmail(email, verificationLink);

    return user;
  }

  findOneByEmail(email: string): Promise<User> {
    return this.repo.findOne({ where: { email } });
  }

  findOneById(id: number): Promise<User> {
    return this.repo.findOneBy({ id })
  }

  async update(id: number, attrs: Partial<User>): Promise<User> {
    const user = await this.repo.findOneBy({ id });
    if (!user) throw new NotFoundException('User Not Found');
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  // find(entity) {
  //   return this.repo.find(entity);
  // }

  save(user: User): Promise<User> {
    return this.repo.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.repo.findOneBy({ id });
    if (!user) throw new NotFoundException('User Not Found');
    return this.repo.remove(user);
  }
}
