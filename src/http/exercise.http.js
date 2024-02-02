const baseHttpService = require('./base.http');

async function createExercise(exercise){
  const relativeUrl = 'exercise/create';
  return await baseHttpService.executePost(relativeUrl, exercise);
}

async function readExercises(){
  const relativeUrl = 'exercises';
  return await baseHttpService.executeGet(relativeUrl);
}

async function updateExercise(exercise){ 
  const relativeUrl = `exercise/${exercise.id}`;
  return await baseHttpService.executePut(relativeUrl, exercise);
}

module.exports = {
  createExercise,
  readExercises,
  updateExercise
};