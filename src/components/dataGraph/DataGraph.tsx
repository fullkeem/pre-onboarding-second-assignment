import styled from 'styled-components';
import Button from '../buttons/reuseButton';
import LinearChart from './LinearChart';

const DataGraph = () => {
  return (
    <ChartContainer>
      <LinearChart />
      <Button background='#FF6384' text='Export' />
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

export default DataGraph;
