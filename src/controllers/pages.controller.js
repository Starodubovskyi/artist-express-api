const httpStatus = require('http-status');
const { array } = require('joi');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { pagesService } = require('../services');
const { Pages } = require('../models');

const createPages = catchAsync(async (req, res) => {
  const pages = await pagesService.createPages(req.body);
  res.status(httpStatus.CREATED).send(pages);
});

const getPages = catchAsync(async (req, res) => {
  const getPagesService = await pagesService.getPages(req);

  if (!getPagesService) {
    res.status(500).json({ success: false });
  }
  res.send(getPagesService);
});

const getPageById = catchAsync(async (req, res) => {
  const page = await pagesService.getPagesById(req.params.pageId);
  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }
  res.send(page);
});

const updatePage = catchAsync(async (req, res) => {
  const page = await pagesService.updatePageById(req.params.pageId, req.body);
  res.send(page);
});

const deletePage = catchAsync(async (req, res) => {
  await pagesService.deletePagesById(req.params.pageId);
  res.json('page deleted successfully').send();
});

const getTags = async (req, res) => {
  const tags = await pagesService.getPagesTags();

  if (!tags) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }

  res.send(tags);
};

module.exports = {
  createPages,
  getPages,
  getPageById,
  updatePage,
  deletePage,
  getTags,
};
