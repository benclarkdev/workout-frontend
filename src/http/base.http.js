const axios = require('axios');

async function executePost(relativeUrl, params, onSuccess, onError, onComplete){
  const url = getFullUrl(relativeUrl);
  await axios.post(url, params)
    .then((response) => { onSuccess(response); })
    .catch((error) => { onError(error); })
    .finally(() => { onComplete(); });
}

async function executePut(relativeUrl, params, onSuccess, onError, onComplete){
  const url = getFullUrl(relativeUrl);
  await axios.put(url, params)
    .then((response) => { onSuccess(response); })
    .catch((error) => { onError(error); })
    .finally(() => { onComplete(); });
}

async function executeGet(relativeUrl, params, onSuccess, onError, onComplete){
  const url = getFullUrl(relativeUrl);
  await axios.post(url, params)
    .then((response) => { onSuccess(response); })
    .catch((error) => { onError(error); })
    .finally(() => { onComplete(); });
}

async function executeDelete(relativeUrl, params, onSuccess, onError, onComplete){
  const url = getFullUrl(relativeUrl);
  await axios.delete(url, params)
    .then((response) => { onSuccess(response); })
    .catch((error) => { onError(error); })
    .finally(() => { onComplete(); });
}

// BEGIN PRIVATE FUNCTIONS
const API_BASE_URL = 'http://localhost:3000';

function getFullUrl(relativePath){
  return `${API_BASE_URL}/${relativePath}`;
}
// END PRIVATE FUNCTIONS

module.exports = {
  executePost,
  executePut,
  executeGet,
  executeDelete
};