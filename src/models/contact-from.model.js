const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
});

/**
 * @typedef Contact
 */
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
