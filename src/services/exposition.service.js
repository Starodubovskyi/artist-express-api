const axios = require('axios');

const getExpositionData = async () => {
  try {
    const response = await axios.get(
      `https://mtalegacy.alloy.it/legacy/rest-api/v1/exposition/get/2/${process.env.EXPOSITION_ID}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch exposition data');
  }
};

module.exports = {
  getExpositionData,
};
