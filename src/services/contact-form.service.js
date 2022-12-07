const { Contact } = require('../models');
const { sendEmail } = require('./email.service');

/**
 * Create a pages
 * @param {Object} contactBody
 * @returns {Promise<Pages>}
 */
const sendMailContactSection = async (contactBody) => {
  await Contact.create(contactBody);
  return sendEmail(contactBody.email, contactBody.subject, contactBody.text);
};

module.exports = {
  sendMailContactSection,
};
