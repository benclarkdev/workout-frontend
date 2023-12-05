import ExerciseForm from './ExerciseForm'

export default function ExerciseList(){
  return(
    <section>
      <h2>Exercises</h2>
      <ul>
        <li>Bench Press</li>
        <li>Dead Lift</li>
      </ul>

      <h2>Exercise Form</h2>
      <ExerciseForm />
    </section>
  )
}