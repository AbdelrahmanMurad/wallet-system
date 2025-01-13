import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "4366620ff44d35",
      pass: "1e9a65200c2c8d"
    }
  });

  async sendVerificationEmail(email: string, verificationLink: string) {
    await this.transporter.sendMail({
      to: email,
      subject: 'Account Verification',
      text: `Please verify your account using this link: ${verificationLink}`,
    });
  }
}
