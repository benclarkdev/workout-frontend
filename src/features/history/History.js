import { useEffect, useState } from 'react';
import Chart from './Chart';

const historyHttpService = require('../../http/history.http');

export default function History({ selectedExercise }) {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (selectedExercise != null && selectedExercise != undefined && selectedExercise != '') {
      historyHttpService.getExerciseHistory(selectedExercise, 'Ben')
        .then((data) => {
          setHistory(data);
          setLoading(false);
        }).catch((error) => {
          console.error('error', error)
        });
    }
  }, [selectedExercise]);

  if (selectedExercise){
    if (loading) {
      return (
        <section>
          <h2>History</h2>
          <p>Loading...</p>
        </section>
      )
    } else if (history) {
      return(
        <section>
          <h2>History</h2>
          <Chart historicalData={ history } />
      </section>
      )
    } else {
      return (
        <section>
          <h2>History</h2>
          <p>No progress history.</p>
        </section>
      )
    }
  }
}