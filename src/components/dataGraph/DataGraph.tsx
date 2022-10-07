import LinearChart from './LinearChart';
import Zoom from '../buttons/Zoom';
import Button from '../buttons/ReuseButton';
import styled from 'styled-components';

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
