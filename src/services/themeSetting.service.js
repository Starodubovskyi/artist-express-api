const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { ThemeSetting } = require('../models');

/**
 * Get First Theme
 * @returns {Promise<Theme>}
 */
const getThemeSettings = async () => {
  return ThemeSetting.findOne();
};

/**
 * Update Theme
 * @param {Object} updateBody
 * @returns {Promise<Theme>}
 */
const updateTheme = async (updateBody) => {
  const theme = await ThemeSetting.findOne();
  if (!theme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  Object.assign(theme, updateBody);
  await theme.save();
  return theme;
};

module.exports = {
  getThemeSettings,
  updateTheme,
};
