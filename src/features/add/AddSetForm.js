import { useState } from 'react';

export default function AddSetForm({exercise, person}){
  // TODO: initialize and get all of the exercises
  const [formData, setFormData] = useState({
    exercise: exercise,
    person: person,
    reps: 0,
    weight: 0
  });

  const [status, setStatus] = useState('typing');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="reps">Reps</label>
          <input type="number"
                name="reps"
                min="1" 
                max="100"
                value={formData.reps}
                onChange={handleChange}
                disabled={status === 'submitting'} />
        </div>
        <div className="form-input">
          <label htmlFor="weight">Weight</label>
          <input name="weight"
                type="number"
                min="1" 
                max="1000"
                value={formData.weight}
                onChange={handleChange}
                disabled={status === 'submitting'} />
        </div>
        
        <input type="submit" value="Submit" />

        {status === 'error' &&
          <p className="error">
            Error!
          </p>
        }
      </form>
    </section>
  )
}