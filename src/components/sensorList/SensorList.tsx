import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { SensorInfo } from '../../interface';
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

  return <StyledSection></StyledSection>;
};

const StyledSection = styled.section`
  width: 1280px;
`;

export default SensorList;
