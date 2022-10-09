import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Columns } from './Columns';
import { Table } from './Table';
import { SensorInfo } from '../../interface';
import Data from '../../assets/data/sensorInfoList.json';

import Button from '../buttons/Button';

import styled from 'styled-components';

const SensorList = () => {
  const columns = React.useMemo(() => Columns, []);
  const data = React.useMemo(() => Data, []);

  const navigate = useNavigate();

  return (
    <>
      <Button background='#36A2EB' text='Graph' onClick={() => navigate('/graph')} />
      <StyledSection>
        <Table columns={columns} data={data} />
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  width: 100%;
`;

export default SensorList;
