import Button from '../buttons/reuseButton';
import LinearChart from './LinearChart';

import styled from 'styled-components';
import Zoom from '../buttons/Zoom';

const DataGraph = () => {
  return (
    <ChartContainer>
      <div className='button'>
        <Zoom />
      </div>
      <LinearChart />
      <div className='button'>
        <Button background='#FF6384' text='Export' />
      </div>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

export default DataGraph;
