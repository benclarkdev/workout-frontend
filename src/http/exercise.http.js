const baseHttpService = require('./base.http');

async function createExercise(exercise, onSuccess, onError, onComplete){
  const relativeUrl = 'exercise/create';
  return await baseHttpService.executePost(relativeUrl, params, onSuccess, onError, onComplete);
}

async function readExercises(onSuccess, onError, onComplete){
  const relativeUrl = 'exercises';
  return await baseHttpService.executePost(relativeUrl, params, onSuccess, onError, onComplete);
}

async function updateExercise(exercise, onSuccess, onError, onComplete){
  const relativeUrl = `exercise/${exercise.id}`;
  return await baseHttpService.executePost(relativeUrl, params, onSuccess, onError, onComplete);
}

module.exports = {
  createExercise,
  readExercises,
  updateExercise
};