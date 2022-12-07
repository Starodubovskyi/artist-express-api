const express = require('express');
const auth = require('../../middlewares/auth');
const { customBlockController } = require('../../controllers');

const router = express.Router();

router.post('', customBlockController.createCustomBlock);
router.get('', customBlockController.getCustomBlock);
router.get('/:blocksId', customBlockController.getCustomBlockById);
router.patch('/:blocksId', customBlockController.updateCustomBlock);
router.delete('/:blocksId', customBlockController.deleteCustomBlock);

module.exports = router;
