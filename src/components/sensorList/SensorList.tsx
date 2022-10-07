import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SensorInfo } from '../../interface';
import Button from '../buttons/ReuseButton';
import styled from 'styled-components';

interface SensorInfoRes {
  data: SensorInfo[];
}

const SensorList = () => {
  const [infoList, setInfoList] = useState<SensorInfo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<SensorInfoRes>('/data/sensorInfoList.json');
      setInfoList(data.data);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessor: 'thingName',
        Header: 'Sensor ID',
      },
      {
        accessor: 'Bat.(%)',
        Header: 'Sensor ID',
      },
      {
        accessor: 'Connected at',
        Header: 'connAt',
      },
      {
        accessor: 'DisConnected at',
        Header: 'connAt',
      },
    ],
    []
  );

  return (
    <StyledSection>
      <Link to='/graph'>
        <Button background='#36A2EB' text='Graph' />
      </Link>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 1280px;
`;

export default SensorList;
