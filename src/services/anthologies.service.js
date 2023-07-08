const axios = require('axios');

const fetchAnthologyList = async () => {
  const response = await axios.get(`https://mtalegacy.alloy.it/legacy/rest-api/v1/anthology/list/2/1`);
  return response.data;
};

const fetchAnthology = async () => {
  const response = await axios.get(`https://mtalegacy.alloy.it/legacy/rest-api/v1/anthology/get/2/16`);
  return response.data;
};

module.exports = {
  fetchAnthologyList,
  fetchAnthology,
};
