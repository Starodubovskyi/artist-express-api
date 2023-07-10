const axios = require('axios');

const fetchCatalogList = async () => {
  const response = await axios.get(
    `https://mtalegacy.alloy.it/legacy/rest-api/v1/catalog/list/${process.env.ACCOUNT_ID}/${process.env.ARTIST_ID}`
  );
  return response.data;
};

const fetchCatalog = async () => {
  const response = await axios.get(`https://mtalegacy.alloy.it/legacy/rest-api/v1/catalog/get/2/50`);
  return response.data;
};

module.exports = {
  fetchCatalogList,
  fetchCatalog,
};
