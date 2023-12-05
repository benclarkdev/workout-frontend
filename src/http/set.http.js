const baseHttpService = require('./base.http');

async function getSetsByDate(jsDate, onSuccess, onError, onComplete){
  const relativeUrl = `setsByDate?date=${jsDate.toISOString()}`;
  return await baseHttpService.executeGet(relativeUrl, params, onSuccess, onError, onComplete);
}

async function postSet(set, onSuccess, onError, onComplete){
  const relativeUrl = 'set/create';
  const params = { exerciseId: 1, reps: 1, person: 1, weight: 100 };
  return await baseHttpService.executePost(relativeUrl, params, onSuccess, onError, onComplete);
}

module.exports = {
  getSetsByDate,
  postSet
};