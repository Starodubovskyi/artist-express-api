const mongoose = require('mongoose');

const themeSettingSchema = mongoose.Schema({
  colors: {},
  body: {},
  header: {},
  footer: {},
  mainMenu: [],
  footerMenu: [],
  siteName: { type: String },
  siteLogo: {},
});

/**
 * @typedef ThemeSettingtheme
 */
const ThemeSetting = mongoose.model('ThemeSetting', themeSettingSchema);

module.exports = ThemeSetting;
