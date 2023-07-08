const { getAnthologiesService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAnthologyList = catchAsync(async (req, res) => {
  const artistData = await getAnthologiesService.fetchAnthologyList();
  res.json(artistData);
});

const getAnthology = catchAsync(async (req, res) => {
  const artistData = await getAnthologiesService.fetchAnthology();
  res.json(artistData);
});

module.exports = {
  getAnthologyList,
  getAnthology,
};
