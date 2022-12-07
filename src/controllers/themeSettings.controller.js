const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { themeSettingService } = require('../services');

const getTheme = catchAsync(async (req, res) => {
  const getPagesService = await themeSettingService.getThemeSettings(req);

  if (!getPagesService) {
    res.status(500).json({ success: false });
  }

  res.json(getPagesService);
});

const updateTheme = catchAsync(async (req, res) => {
  const page = await themeSettingService.updateTheme(req.body);
  res.send(page);
});

module.exports = {
  getTheme,
  updateTheme,
};
