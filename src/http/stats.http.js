const baseHttpService = require('./base.http');

async function getExerciseHistory(exerciseId, onSuccess, onError, onComplete){
  const relativeUrl = `stats/historyForExercise/${exerciseId}`;
  return await baseHttpService.executeGet(relativeUrl, params, onSuccess, onError, onComplete);
}

async function oneRepMaxActual(exerciseId, onSuccess, onError, onComplete){
  const relativeUrl = `stats/oneRepMaxActual/${exerciseId}`;
  return await baseHttpService.executeGet(relativeUrl, params, onSuccess, onError, onComplete);
}

async function oneRepMaxTheoretical(exerciseId, onSuccess, onError, onComplete){
  const relativeUrl = `stats/oneRepMaxTheoretical/${exerciseId}`;
  return await baseHttpService.executeGet(relativeUrl, params, onSuccess, onError, onComplete);
}

module.exports = {
  getExerciseHistory,
  oneRepMaxActual,
  oneRepMaxTheoretical
};