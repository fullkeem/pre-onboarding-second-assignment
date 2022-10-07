import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { getResponsiveWidth } from '../../../utils/getResponsiveWidth';

Chart.register(...registerables);

interface LinearChartProps {
  labels: string[];
  label: string;
  data: string[];
  color: string;
  width: number;
  unit?: string;
}

const LinearChart = ({ data, label, labels, color, width, unit }: LinearChartProps) => {
  return (
    <ChartOverContainer>
      <ChartContainer width={width}>
        <Line
          data={{
            labels,
            datasets: [
              {
                label,
                data,
                borderColor: color,
                borderWidth: width / getResponsiveWidth() > 1 ? (width * 1) / getResponsiveWidth() : 1,
                backgroundColor: 'transparent',
                pointRadius: width / getResponsiveWidth() > 1 ? (width * 1) / getResponsiveWidth() : 0,
                pointBorderWidth: width / getResponsiveWidth() > 1 ? (width * 0.5) / getResponsiveWidth() : 0,
                pointBackgroundColor: color,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  callback: value => (unit ? `${value} ${unit}` : value),
                },
              },
            },
            maintainAspectRatio: false,
          }}
          height='400px'
        />
      </ChartContainer>
    </ChartOverContainer>
  );
};

const ChartContainer = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 400px;
  transition: 0.2s;
  padding-bottom: 10px;
`;

const ChartOverContainer = styled.div`
  width: 90vw;
  max-width: 800px;
  overflow-x: scroll;
  margin-top: 20px;

  @media screen and (min-width: 800px) {
    width: 60vw;
  }
`;

export default LinearChart;
