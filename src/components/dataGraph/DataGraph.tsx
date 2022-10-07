import styled from 'styled-components';
import LinearChart from './LinearChart';

const DataGraph = () => {
  return (
    <ChartContainer>
      <LinearChart />
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

export default DataGraph;
