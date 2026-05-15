const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const { contactValidationRules } = require('../validators/contactValidator');

router.post('/', contactValidationRules(), submitContactForm);

module.exports = router;
