import { useState } from 'react';

export default function AddSetForm(){
  // form states
  const [person, setPerson] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [reps, setReps] = useState(null);
  const [weight, setWeight] = useState(null);

  const [status, setStatus] = useState('typing');
  const [error, setError] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();
    setStatus('submitting');

    let set = {
      person,
      exercise,
      reps,
      weight
    };

    try {
      await submitForm(set);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function submitForm(set) {
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="person">Person</label>
      <select name="person" 
              id="person" 
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              disabled={status === 'submitting'}>
        <option value="ben">Ben</option>
        <option value="craig">Craig</option>
      </select>

      <label for="person">Exercise</label>
      <select name="exercise"
              id="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              disabled={status === 'submitting'}>
        <option value="1">Pushups</option>
        <option value="2">Curls</option>
      </select>

      <label for="reps">Reps</label>
      <input type="number"
             name="reps"
             id="reps" 
             min="1" 
             max="100"
             value={reps}
             onChange={(e) => setReps(e.target.value)}
             disabled={status === 'submitting'} />

      <label for="weight">Weight</label>
      <input type="number"
             name="weight" 
             id="weight" 
             min="1" 
             max="1000"
             value={weight}
             onChange={(e) => setWeight(e.target.value)}
             disabled={status === 'submitting'} />

      <button disabled={status==='clean' || status==='submitting'}>
        Add +
      </button>

      {status === 'error' &&
        <p className="error">
          Error!
        </p>
      }
    </form>
  )
}