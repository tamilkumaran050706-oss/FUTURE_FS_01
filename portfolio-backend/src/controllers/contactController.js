const { validationResult } = require('express-validator');
const Contact = require('../models/contactModel');
const sendEmail = require('../utils/sendEmail');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Save to database
    const contact = await Contact.create({
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
      console.error('Email could not be sent', emailError);
      // We don't necessarily want to fail the whole request if email fails but DB succeeded
    }

    res.status(201).json({
      success: true,
      message: 'Message received and saved successfully',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContactForm,
};
