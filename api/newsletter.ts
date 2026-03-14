import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Missing email' });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return res.status(400).json({ message: 'Invalid email pattern' });
        }

        // Send Email
        const zohoPassword = process.env.ZOHO_PASSWORD;
        if (!zohoPassword) {
            console.error('ZOHO_PASSWORD is not set');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: 'climatecardinalstz@climatecardinalst.or.tz',
                pass: zohoPassword,
            },
        });

        const mailOptions = {
            from: '"Climate Cardinals Website" <climatecardinalstz@climatecardinalst.or.tz>',
            to: 'climatecardinalstz@climatecardinalst.or.tz',
            replyTo: email,
            subject: `New Newsletter Subscription`,
            text: `Someone has just subscribed to the newsletter!\n\nEmail: ${email}`,
            html: `
        <h3>New Newsletter Subscription</h3>
        <p>Someone has just subscribed to the newsletter!</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Error processing newsletter subscription:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
