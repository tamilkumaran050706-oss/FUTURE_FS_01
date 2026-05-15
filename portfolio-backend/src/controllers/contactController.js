const Contact = require('../models/contactModel');
const sendEmail = require('../utils/sendEmail');
const { validateContact } = require('../validators/contactValidator');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res, next) => {
  const { isValid, errors } = validateContact(req.body);

  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Save to MySQL database
    await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    try {
      await sendEmail({
        name,
        email,
        subject: `New Portfolio Message: ${subject}`,
        message,
      });
    } catch (emailError) {
      console.error('Email could not be sent:', emailError.message);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContactForm,
};
