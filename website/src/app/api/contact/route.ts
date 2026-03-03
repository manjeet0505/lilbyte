import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          error:
            'Server email is not configured. Missing EMAIL_USER / EMAIL_PASS environment variables.',
        },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email to you (lilbyteorg@gmail.com)
    const mailOptions = {
      from: emailUser,
      to: 'lilbyteorg@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #666;">
              This message was sent from the LilByte Tech Studio contact form
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: emailUser,
      to: email,
      subject: 'Thank you for contacting LilByte Tech Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank You for Contacting Us!
          </h2>
          
          <p style="color: #555; line-height: 1.6;">
            Hi ${name},<br><br>
            Thank you for reaching out to LilByte Tech Studio. We've received your message about your ${projectType} project and will get back to you within 24 hours.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ul style="color: #555; line-height: 1.6;">
              <li>We'll review your project requirements</li>
              <li>Prepare a personalized response</li>
              <li>Contact you within 24 hours</li>
            </ul>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #666;">
              Need immediate assistance? Book a free consultation call:<br>
              <a href="https://calendly.com/mishramanjeet26/30min" style="color: #3b82f6; text-decoration: none;">
                Schedule a Call
              </a>
            </p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
            Best regards,<br>
            The LilByte Tech Studio Team
          </p>
        </div>
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error:
          'Failed to send email. Please verify EMAIL_USER / EMAIL_PASS (Gmail App Password) and try again.',
      },
      { status: 500 }
    );
  }
}
