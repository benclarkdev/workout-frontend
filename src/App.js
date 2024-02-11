import React from 'react'
import { useEffect, useState } from 'react';
import exerciseHttpService from './http/exercise.http';

import AddWorkout from './features/add/AddWorkout';
import History from './features/history/History';
import Header from './features/header/Header';

import './styles/forms.scss';

import './App.scss';

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
      <div>
        <Header></Header>
        <p className="container">
          Loading...
        </p>
      </div>
    )
  } else if (exercises) { 
    return (
      <div className="container">
        <Header></Header>
        <section className="workout-selector">
          <div className="form-control">
            <label htmlFor="person">Person</label>
            <select name="person"
                    value={selectedPerson}
                    onChange={handlePersonChange}>
              <option value=''></option>
              <option value='Ben'>Ben</option>
              <option value='Craig'>Craig</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="exercise">Exercise</label>
            <select name="exercise"
                      value={selectedExercise}
                      disabled={isLoading}
                      onChange={handleExerciseSelected}>
              <option value=""></option>
              {exerciseOptions}
            </select>
          </div>
        </section>
        <AddWorkout selectedExercise={selectedExercise} />
        <History selectedExercise={selectedExercise} />
      </div>
    )
  }
}