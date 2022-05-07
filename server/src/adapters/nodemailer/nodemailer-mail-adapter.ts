import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9b04dacd9feb76",
      pass: "d38436e4fbfec3"
    }
});

export class NodemailMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feeedget.com>',
            to: 'Diego Silva <diegocatano444@outlook.com>',
            subject,
            html: body,
        });
    };
}