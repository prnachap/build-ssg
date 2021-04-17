const axios = require("axios");
require("dotenv").config();

module.exports = async function getUser() {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}&pageSize=5`
  );
  return response.data;
};
