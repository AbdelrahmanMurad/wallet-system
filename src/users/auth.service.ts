import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { SignUpDto } from "./dto/sign-up.dto";
import { LogInDto } from "./dto/log-in.dto";
import { ResetPassDto } from "./dto/reset-pass.dto";
import { User } from "./entities/user.entity";
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async signUp(body: SignUpDto): Promise<User> {
        let { email, password } = body; // to avoid calling the properities with body.email, body.password, etc.
        const existingUser = await this.usersService.findOneByEmail(email);
        if (existingUser) throw new BadRequestException("Email is already in use.");

        const salt = randomBytes(8).toString('hex');
        const hashedBuffer = (await scrypt(password, salt, 32)) as Buffer;
        const hashedPassword = `${salt}.${hashedBuffer.toString('hex')}`;

        // password = hashedPassword; // you can't use this, because it will update the password in the {email, password}.
        body.password = hashedPassword; // so we use this.
        // console.log(body.password);

        const user = await this.usersService.register(body);
        return user;
    }

    async logIn(body: LogInDto): Promise<User> {
        const { email, password } = body;

        const user = await this.usersService.findOneByEmail(email);
        if (!user) throw new NotFoundException("User not found.");

        const [salt, storedHash] = user.password.split(".");
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        // console.log(storedHash);
        // console.log(hash.toString("hex"));
        if (storedHash !== hash.toString("hex")) throw new BadRequestException("Invalid password.");

        if (!user.isVerified) throw new ForbiddenException('Account Not Verified');

        return user;
    }

    async resetPassword(body: ResetPassDto): Promise<User> {
        const { email, password } = body;

        const user = await this.usersService.findOneByEmail(email);

        if (!user) throw new NotFoundException('User not found.')

        if (!user.isVerified) throw new ForbiddenException('Account Not Verified')

        const salt = randomBytes(8).toString('hex');
        const hashedBuffer = (await scrypt(password, salt, 32)) as Buffer;
        const hashedPassword = `${salt}.${hashedBuffer.toString('hex')}`;

        body.password = hashedPassword;

        await this.usersService.save(user);
        return user;
    }
}