const catchAsync = require('../utils/catchAsync');
const { contactService } = require('../services');

const sendMessages = catchAsync(async (req, res) => {
  const sendMsg = contactService.sendMailContactSection(req.body);
  if (Object.keys(sendMsg).length !== 0) {
    res.send('having problems sending');
  }

  res.status(202).send({ success: true, message: 'your message has been successfully sent' });
});

module.exports = {
  sendMessages,
};
