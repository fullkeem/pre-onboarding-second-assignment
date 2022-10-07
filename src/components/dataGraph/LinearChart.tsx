import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const LinearChart = () => {
  return (
    <Line
      data={{
        labels: [1, 2, 3],
        datasets: [
          {
            label: 'asd',
            data: [10, 20, 24],
            borderColor: 'black',
          },
        ],
      }}
    />
  );
};

export default LinearChart;
