import { useEffect, useState } from 'react';

const historyHttpService = require('../../http/history.http');

export default function History({ selectedExercise }) {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (selectedExercise != null && selectedExercise != undefined && selectedExercise != '') {
      historyHttpService.getExerciseHistory(selectedExercise, 'Ben')
        .then((data) => console.log('data', data))
        .catch((error) => console.error('error', error));
    }
  }, [selectedExercise]);

  if (loading) {
    <section>
      <h2>History</h2>
      <p>Loading...</p>
    </section>
  } else if (history) {
    <section>
      <h2>History</h2>
      <p>History!</p>
    </section>
  } else {
    return (
      <section>
        <h2>History</h2>
        <p>No progress history.</p>
      </section>
    )
  }
}