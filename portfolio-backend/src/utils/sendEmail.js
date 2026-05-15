const nodemailer = require('nodemailer');

// Utility function to send emails via Gmail SMTP
const sendEmail = async (options) => {
  // Create a transporter using Gmail service
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Directly specifying gmail for better reliability
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // This MUST be an App Password
    },
  });

  // Configure the email content
  const mailOptions = {
    from: `"${options.name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: options.subject,
    text: `You have a new message from your portfolio contact form!\n\n` +
          `Name: ${options.name}\n` +
          `Email: ${options.email}\n` +
          `Subject: ${options.subject}\n` +
          `Timestamp: ${new Date().toLocaleString()}\n\n` +
          `Message:\n${options.message}`,
    replyTo: options.email, // Allows you to click 'Reply' and respond directly to the sender
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
  } catch (error) {
    // Log the error but don't crash the server
    console.error('Nodemailer Error:', error.message);
    console.error('Note: Ensure you are using a "Gmail App Password" and NOT your regular password.');
  }
};

module.exports = sendEmail;
