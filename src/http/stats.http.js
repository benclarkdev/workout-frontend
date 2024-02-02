const baseHttpService = require('./base.http');

async function getExerciseHistory(exerciseId){
  const relativeUrl = `stats/historyForExercise/${exerciseId}`;
  return await baseHttpService.executeGet(relativeUrl);
}

async function oneRepMaxActual(exerciseId){
  const relativeUrl = `stats/oneRepMaxActual/${exerciseId}`;
  return await baseHttpService.executeGet(relativeUrl);
}

async function oneRepMaxTheoretical(exerciseId){
  const relativeUrl = `stats/oneRepMaxTheoretical/${exerciseId}`;
  return await baseHttpService.executeGet(relativeUrl);
}

module.exports = {
  getExerciseHistory,
  oneRepMaxActual,
  oneRepMaxTheoretical
};