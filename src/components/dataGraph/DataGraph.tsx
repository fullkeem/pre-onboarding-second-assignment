import Button from '../buttons/reuseButton';
import LinearChart from './LinearChart';

import styled from 'styled-components';
import Zoom from '../buttons/Zoom';

const DataGraph = () => {
  return (
    <ChartContainer>
      <div className='buttons'>
        <Zoom />
      </div>
      <LinearChart />
      <div className='buttons'>
        <Button background='#FF6384' text='Export' />
      </div>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

export default DataGraph;
