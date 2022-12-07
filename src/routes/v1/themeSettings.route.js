const express = require('express');
const auth = require('../../middlewares/auth');
const { themeController } = require('../../controllers');

const router = express.Router();

router.get('/theme-settings', themeController.getTheme);
router.patch('/theme-settings', themeController.updateTheme);

// createTheme
// router.post('/manage-pages', pagesController.createPages);
// router.get('/manage-pages', pagesController.getPages);
// router.get('/manage-pages/:pageId', pagesController.getPageById);
// router.patch('/manage-pages/:pageId', pagesController.updatePage);
// router.delete('/manage-pages/:pageId', pagesController.deletePage);

module.exports = router;
