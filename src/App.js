import React from 'react'
import { useEffect, useState } from 'react';
import exerciseHttpService from './http/exercise.http';

import AddWorkout from './features/add/AddWorkout';
import History from './features/history/History';

import './features/styles/form.css';

export default function App(){
  const [exercises, setExercises] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [selectedExercise, setSelectedExercise] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');

  useEffect(() => {
    exerciseHttpService.readExercises()
      .then(res => {
        setExercises(res.exercises);
        setLoading(false);
      }).catch(err => {
        console.error(err);
      })
  }, []);

  const handleExerciseSelected = (select) => {
    setSelectedExercise(select.target.value);
  };

  const handlePersonChange = (select) => {
    setSelectedPerson(select.target.value);
  };

  const exerciseOptions = exercises.map((exercise) => 
    (<option 
      key={exercise._id}
      value={exercise.name}>{ exercise.name }</option>)
  );

  if (isLoading){
    return (
      <section>
        <p className="container">
          Loading...
        </p>
      </section>
    )
  } else if (exercises) { 
    return (
      <div className="container">
        <h1>Workout Tracker!</h1>
        <label htmlFor="person">Person</label>
        <select name="person"
                value={selectedPerson}
                onChange={handlePersonChange}>
          <option value=''></option>
          <option value='Ben'>Ben</option>
          <option value='Craig'>Craig</option>
        </select>
        <label htmlFor="exercise">Exercise</label>
        <select name="exercise"
                  value={selectedExercise}
                  disabled={isLoading}
                  onChange={handleExerciseSelected}>
          <option value=""></option>
          {exerciseOptions}
        </select>
        <AddWorkout selectedExercise={selectedExercise} />
        <History selectedExercise={selectedExercise} />
      </div>
    )
  }
}