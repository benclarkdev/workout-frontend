import { useState } from 'react';

export default function ExerciseForm({onSubmitForm}){
  const [inputs, setInputs] = useState({});

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

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name
        <input name="name"
               type="text"
               value={inputs.name || ''}
               onChange={handleChange}
        />
      </label>
      <label for="group">Group
      <select name="group" 
              value={inputs.group || ''}
              onChange={handleChange}>
        <option></option>
        <option>Arms</option>
        <option>Back</option>
        <option>Chest</option>
        <option>Legs</option>
        <option>Shoulders</option>
      </select>
      </label>
      <button>
        Add +
      </button>
    </form>
  )
}