import React from "react"

import AddWorkout from "./features/add/AddWorkout";
import History from "./features/history/History";
import ExerciseList from "./features/exercise/ExerciseList";

class App extends React.Component {
  state = {
    name: ""
  }

  componentDidMount() {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(data => this.setState({ name: data.name }))
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <AddWorkout/>
        <History/>
        <ExerciseList/>
      </div>
    )
  }
}

export default App