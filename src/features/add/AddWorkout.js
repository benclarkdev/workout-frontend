import AddSetForm from './AddSetForm';

export default function AddWorkout({ exercises }){
  return (
    <section>
      <h2>Add Workout</h2>
      <AddSetForm exercises={exercises}/>
    </section>
  )
}