const { body } = require('express-validator');

const contactValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('subject').notEmpty().withMessage('Subject is required').trim().escape(),
    body('message').notEmpty().withMessage('Message is required').trim().escape(),
  ];
};

module.exports = {
  contactValidationRules,
};
