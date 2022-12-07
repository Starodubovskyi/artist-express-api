const express = require('express');
const pagesController = require('../../controllers/pages.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/manage-pages', pagesController.createPages);
router.get('/manage-pages', pagesController.getPages);
router.get('/manage-pages/:pageId', pagesController.getPageById);
router.patch('/manage-pages/:pageId', pagesController.updatePage);
router.delete('/manage-pages/:pageId', pagesController.deletePage);

router.get('/manage-tags', pagesController.getTags);

module.exports = router;
