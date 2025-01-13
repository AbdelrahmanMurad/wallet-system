import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require("cookie-session"); // import manually

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.use(cookieSession({
    name: 'session',
    keys: ["asdfasdf"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


/* test this, if its right use it



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieSession from 'cookie-session';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
  }));

  await app.listen(3000);
}
bootstrap();

*/