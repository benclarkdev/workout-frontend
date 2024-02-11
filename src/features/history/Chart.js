import { useEffect, useState } from 'react';

import {
  BarElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({historicalData}){
  const [isLoading, setLoading] = useState(true);
  const [barChartData, setBarChartData] = useState(null);

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      }
    },
    scales: {
      'y-axis-1': {
        type: 'linear',
        position: 'left',
      },
      'y-axis-2': {
        type: 'linear',
        position: 'right',
      }
    },
  };

  function createDataSets(dates, reps, weight) {
    return {
      labels: dates,
      datasets: [
        {
          label: 'Reps',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          yAxisID: 'y-axis-1', // Assign this dataset to the first y-axis
          data: reps,
        },
        {
          label: 'Weight',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          yAxisID: 'y-axis-2', // Assign this dataset to the second y-axis
          data: weight,
        },
      ],
    };
  }

  useEffect(() => {
    setLoading(true);

    historicalData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    const dates = historicalData.map((each) => {
      return each.date;
    });

    const reps = historicalData.map((each) => {
      return each.reps;
    });

    const weight = historicalData.map((each) => {
      return each.weight;
    });

    let data = createDataSets(dates, reps, weight);

    console.log('data', data);

    setBarChartData(data);
    setLoading(false);
  }, [historicalData]);

  if (historicalData && !isLoading){
    return(
      <div className="chart-container">
        <Bar options={barChartOptions} data={barChartData} />
      </div>
    )
  } else if (historicalData && isLoading) {
    return(
      <div className="loading">
        Loading...
      </div>
    )
  } else {
    return(
      <div className="no-data">
        No data!
      </div>
    )
  }
}