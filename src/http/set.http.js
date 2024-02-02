const baseHttpService = require('./base.http');

async function getSetsByDate(jsDate){
  const relativeUrl = `setsByDate?date=${jsDate.toISOString()}`;
  return await baseHttpService.executeGet(relativeUrl);
}

async function postSet(set){
  const relativeUrl = 'set/create';
  return await baseHttpService.executePost(relativeUrl, set);
}

module.exports = {
  getSetsByDate,
  postSet
};