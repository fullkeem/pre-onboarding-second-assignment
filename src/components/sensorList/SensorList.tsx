import * as React from 'react';
import { Columns } from './Columns';
import { Table } from './Table';
import Data from '../../assets/data/sensorInfoList.json';
import styled from 'styled-components';

const SensorList = () => {
  const columns = React.useMemo(() => Columns, []);
  const data = React.useMemo(() => Data, []);

  return (
    <StyledSection>
      <Table columns={columns} data={data} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 1280px;
`;

export default SensorList;
