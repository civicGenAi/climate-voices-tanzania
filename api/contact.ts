import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { firstName, lastName, email, subject, message, 'cf-turnstile-response': turnstileResponse } = req.body;

        if (!turnstileResponse) {
            return res.status(400).json({ message: 'Turnstile verification failed' });
        }

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Verify Turnstile
        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
        if (!turnstileSecret) {
            console.error('TURNSTILE_SECRET_KEY is not set');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstileResponse)}`,
        });

        const verificationResult = await verificationResponse.json();

        if (!verificationResult.success) {
            console.error('Turnstile fail:', verificationResult);
            return res.status(400).json({ message: 'Turnstile verification failed' });
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
            subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
            text: `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
