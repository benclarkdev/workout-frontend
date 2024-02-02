const baseHttpService = require('./base.http');

async function getOneRepMaxHistory(exercise, person){
  const relativeUrl = `history/oneRepMax`;
  const body = {
    exercise: exercise,
    person: person
  };

  return await baseHttpService.executePost(relativeUrl, body);
}

async function getExerciseHistory(exercise, person){
  const relativeUrl = `history/exercise`;
  const body = {
    exercise: exercise,
    person: person
  };

  return await baseHttpService.executePost(relativeUrl, body);
}

module.exports = {
  getExerciseHistory,
  getOneRepMaxHistory
};