const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { customBlocks } = require('../services');

const createCustomBlock = catchAsync(async (req, res) => {
  const blocks = await customBlocks.createCustomBlock(req.body);
  res.status(httpStatus.CREATED).send(blocks);
});

const getCustomBlock = catchAsync(async (req, res) => {
  const getBlocksService = await customBlocks.getCustomBlock(req);

  if (!getBlocksService) {
    res.status(500).json({ success: false });
  }
  res.send(getBlocksService);
});

const getCustomBlockById = catchAsync(async (req, res) => {
  const blocks = await customBlocks.getCustomBlockById(req.params.blocksId);
  if (!blocks) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }
  res.send(blocks);
});

const updateCustomBlock = catchAsync(async (req, res) => {
  const blocks = await customBlocks.updateCustomBlocksById(req.params.blocksId, req.body);
  res.send(blocks);
});

const deleteCustomBlock = catchAsync(async (req, res) => {
  await customBlocks.deleteCustomBlocksById(req.params.blocksId);
  res.json('page deleted successfully').send();
});

module.exports = {
  createCustomBlock,
  getCustomBlock,
  getCustomBlockById,
  updateCustomBlock,
  deleteCustomBlock,
};
