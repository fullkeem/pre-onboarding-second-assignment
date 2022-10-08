<<<<<<< HEAD
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SensorInfo } from '../../interface';
import Button from '../buttons/ReuseButton';
=======
import * as React from 'react';
import { Columns } from './Columns';
import { Table } from './Table';
import Data from '../../assets/data/sensorInfoList.json';
>>>>>>> main
import styled from 'styled-components';

const SensorList = () => {
  const columns = React.useMemo(() => Columns, []);
  const data = React.useMemo(() => Data, []);

  return (
    <StyledSection>
      <Table columns={columns} data={data} />
    </StyledSection>
  );
<<<<<<< HEAD

  return (
    <StyledSection>
      <Link to='/graph'>
        <Button background='#36A2EB' text='Graph' />
      </Link>
    </StyledSection>
  );
=======
>>>>>>> main
};

const StyledSection = styled.section`
  width: 1280px;
`;

export default SensorList;
