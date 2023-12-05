import { useState } from 'react';

export default function AddSetForm(){
  const [inputs, setInputs] = useState({});

  const [status, setStatus] = useState('typing');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(previousState => ({
      ...previousState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  async function jandleSubmit(event){
    event.preventDefault();
    setStatus('submitting');

    try {
      await submitForm(inputs);
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
              value={inputs.person}
              onChange={handleChange}
              disabled={status === 'submitting'}>
        <option>Ben</option>
        <option>Craig</option>
      </select>

      <label for="person">Exercise</label>
      <select name="exercise"
              value={inputs.exercise}
              onChange={handleChange}
              disabled={status === 'submitting'}>
        <option>Pushups</option>
        <option>Curls</option>
      </select>

      <label for="reps">Reps</label>
      <input type="number"
             name="reps"
             min="1" 
             max="100"
             value={inputs.reps}
             onChange={handleChange}
             disabled={status === 'submitting'} />

      <label for="weight">Weight</label>
      <input name="weight"
             type="number"
             min="1" 
             max="1000"
             value={inputs.weight}
             onChange={handleChange}
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