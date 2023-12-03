function executePost(url, params){
  
}

function executePut(url, params){

}

function executeGet(url, params){

}

function executeDelete(url, params){
  
}

// BEGIN PRIVATE FUNCTIONS
const API_BASE_URL = 'http://localhost:3000/';

function getFullUrl(relativePath){
  return `${API_BASE_URL}relativePath`;
}
// END PRIVATE FUNCTIONS

module.exports = {
  executePost,
  executePut,
  executeGet,
  executeDelete
};