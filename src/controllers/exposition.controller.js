const { getExpositionService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getExposition = catchAsync(async (req, res) => {
  const expositionData = await getExpositionService.getExpositionData();
  res.json(expositionData);
});

module.exports = {
  getExposition,
};
