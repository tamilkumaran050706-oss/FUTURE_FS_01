const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${options.name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: options.subject,
    text: `Message from ${options.name} (${options.email}):\n\n${options.message}`,
    replyTo: options.email,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
