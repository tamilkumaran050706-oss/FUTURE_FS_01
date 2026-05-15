const validateContact = (data) => {
  const errors = [];
  const { name, email, subject, message } = data;

  if (!name || name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: 'email', message: 'Valid email is required' });
  }

  if (!subject || subject.trim() === '') {
    errors.push({ field: 'subject', message: 'Subject is required' });
  }

  if (!message || message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters long' });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = { validateContact };
