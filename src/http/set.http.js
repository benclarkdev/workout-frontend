const baseHttpService = require('./base.httpservice');

function getSetsByDate(jsDate){
  const relativeUrl = `setsByDate?date=${jsDate.toISOString()}`;
  baseHttpService.executeGet(relativeUrl, params);
}

function postSet(set){
  const relativeUrl = '/set/create';
  const params = { exerciseId: 1, reps: 1, person: 1, weight: 100 };
  baseHttpService.executePost(relativeUrl, params);
}

module.exports = {
  getSetsByDate,
  postSet
};