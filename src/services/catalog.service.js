const axios = require('axios');

const fetchCatalogList = async () => {
  const response = await axios.get(`https://mtalegacy.alloy.it/legacy/rest-api/v1/catalog/list/2/1`);
  return response.data;
};

const fetchCatalog = async () => {
  const response = await axios.get(`https://mtalegacy.alloy.it/legacy/rest-api/v1/catalog/get/2/50`);
  return response.data;
};

module.exports = {
  fetchCatalogList,
  fetchCatalog
};
