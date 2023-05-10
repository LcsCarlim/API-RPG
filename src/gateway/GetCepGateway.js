const HttpClientHelper = require('../helpers/HttpClientHelper');

const dotenv = require('dotenv');

dotenv.config();

module.exports = async cep => {
  const API = process.env.VIACEP_URL;

  const result = await HttpClientHelper({
    method: 'GET',
    url: `${API}/${cep}/json`,
    headers: {
      Accept: 'application/json'
    }
  });

  return result;
};
