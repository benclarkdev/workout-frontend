const baseHttpService = require('./base.http');

function createExercise(exercise){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function readExercises(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function updateExercise(exercise){
return new Promise((resolve, reject) => {
  setTimeout(() => {
    
    if (shouldError) {
      reject(new Error('Good guess but a wrong answer. Try again!'));
    } else {
      resolve();
    }
  }, 1500);
});
}

module.exports = {
  createExercise,
  readExercises,
  updateExercise
};