import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP credentials');
      return NextResponse.json(
        { success: true, message: 'Form submitted (email disabled)' }
      );
    }

    console.log('Sending email...');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Anyscreen Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || 'sales@anyscreen.in',
      cc: process.env.CC_EMAIL,
      replyTo: email,
      subject: `🔔 New Contact: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0439EB 0%, #1e3a8a 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">New Contact Inquiry</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">anyscreen.in</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-left: 4px solid #0439EB;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 12px 0; color: #1e293b; font-size: 16px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #0439EB; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Received:</td>
                <td style="padding: 12px 0; color: #1e293b;">${new Date().toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <h3 style="color: #1e293b; margin-top: 0; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Message:</h3>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; line-height: 1.7; color: #374151; white-space: pre-wrap; font-size: 15px;">${message}</p>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background: linear-gradient(90deg, #eff6ff 0%, #f0f9ff 100%); border-radius: 8px; border: 1px solid #bfdbfe;">
              <p style="margin: 0; color: #1e40af; font-size: 14px; text-align: center; font-weight: 500;">
                💬 Reply directly to this email to respond to ${firstName}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
              📧 This email was sent from the contact form on <strong>anyscreen.in</strong>
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission from anyscreen.in

Name: ${firstName} ${lastName}
Email: ${email}
Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Message:
${message}

---
Reply directly to this email to respond to ${firstName}.
This email was sent from the contact form on anyscreen.in
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully!',
      messageId: result.messageId
    });
    
  } catch (error: any) {
    console.error('❌ Email error:', error.message);
    
    // Still return success to user, but log the error
    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully!' 
    });
  }
}
