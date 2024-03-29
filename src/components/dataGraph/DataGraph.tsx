import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { getResponsiveWidth } from '../../utils/getResponsiveWidth';
import { SelectDate, WeatherData } from '../../interface';
import LinearChart from './chart/LinearChart';
import Button from '../buttons/Button';
import Calendar from './Calendar';

import styled from 'styled-components';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CHANNEL_ID = 1348864;
const API_KEY = '6SKW0U97IPV2QQV9';
const timezone = 'Asia%2FSeoul';

const DataGraph = () => {
  const navigate = useNavigate;
  const [selectDate, setSelectDate] = useState<SelectDate>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [width, setWidth] = useState(getResponsiveWidth());
  const [modal, setModal] = useState(false);

  const debounce = useRef<NodeJS.Timeout>();

  useEffect(() => {
    (async () => {
      const START = `${selectDate.year}-${(selectDate.month + 1).toString().padStart(2, '0')}-${selectDate.day.toString().padStart(2, '0')}%2000-00-00`;

      const endDate = new Date(selectDate.year, selectDate.month, selectDate.day + 1);

      const END = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}%2000-00-00`;
      const URL = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${API_KEY}&start=${START}&end=${END}&timezone=${timezone}`;

      const { data } = await axios.get<WeatherData>(URL);
      setWeatherData(data);
    })();
  }, [selectDate]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(() => {
        clearTimeout(debounce.current);

        debounce.current = setTimeout(() => setWidth(getResponsiveWidth()), 300);
      });
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  const zoomIn = useCallback(() => {
    setWidth(width * 1.2);
  }, [width]);

  const zoomOut = useCallback(() => {
    setWidth((width * 5) / 6);
  }, [width]);

  const csvLinkHeaders = [
    { label: 'Created_at', key: 'Created_at' },
    { label: 'Entry_id', key: 'Entry_id' },
    { label: 'Temp', key: 'Temp' },
    { label: 'Humidity', key: 'Humidity' },
    { label: 'Pressure', key: 'Pressure' },
  ];

  const csvLinkData = weatherData?.feeds.map(data => {
    return { Created_at: data.created_at, Entry_id: data.entry_id, Temp: data.field1, Humidity: data.field2, Pressure: data.field3 };
  });

  return (
    <>
      {modal && <Calendar selectDate={selectDate} setSelectDate={setSelectDate} setModal={setModal} />}
      <StyledNav>
        <div className='container'>
          <div className='dateContainer'>
            <h2>
              {selectDate.year}/{(selectDate.month + 1).toString().padStart(2, '0')}/{selectDate.day.toString().padStart(2, '0')}
            </h2>
            <IconButton onClick={() => setModal(true)}>
              <BsFillCalendarCheckFill />
            </IconButton>
          </div>
          <div className='btnContainer'>
            <IconButton onClick={zoomIn}>
              <AiFillPlusCircle />
            </IconButton>
            <IconButton onClick={zoomOut}>
              <AiFillMinusCircle />
            </IconButton>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button background='skyblue' text='Sensor List' />
            </Link>
            <CSVLink style={{ textDecoration: 'none' }} data={csvLinkData ?? []} headers={csvLinkHeaders} filename={`${weatherData?.channel.id}_${weatherData?.channel.description}.csv`}>
              <Button background='#36A2EB' text='Export' />
            </CSVLink>
          </div>
        </div>
      </StyledNav>
      <Container>
        {weatherData && (
          <ChartContainer>
            <h2>기온</h2>
            <LinearChart //
              labels={weatherData.feeds.map(feed => `${new Date(feed.created_at).getHours()}시 ${new Date(feed.created_at).getMinutes()}분`)}
              color='pink'
              data={weatherData.feeds.map(feed => feed.field1)}
              label='기온'
              width={width}
              unit='℃'
            />
            <h2>습도</h2>
            <LinearChart //
              labels={weatherData.feeds.map(feed => `${new Date(feed.created_at).getHours()}시 ${new Date(feed.created_at).getMinutes()}분`)}
              color='skyblue'
              data={weatherData.feeds.map(feed => feed.field2)}
              label='습도'
              width={width}
              unit='%'
            />
            <h2>기압</h2>
            <LinearChart //
              labels={weatherData.feeds.map(feed => `${new Date(feed.created_at).getHours()}시 ${new Date(feed.created_at).getMinutes()}분`)}
              color='lightgreen'
              data={weatherData.feeds.map(feed => feed.field3)}
              label='기압'
              width={width}
              unit='hPa'
            />
          </ChartContainer>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 124px;

  @media screen and (min-width: 800px) {
    margin-top: 84px;
  }

  .btnContainer {
    display: flex;
    align-items: center;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 30px;
    color: skyblue;
    margin-top: 20px;
  }
`;

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 4px solid skyblue;
  padding: 10px;
  background-color: white;

  @media screen and (min-width: 800px) {
    padding: 20px;
  }

  div.container {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    margin: 0 auto;

    @media screen and (min-width: 800px) {
      flex-direction: row;
    }

    div.dateContainer {
      display: flex;
      align-items: center;
    }
  }

  div {
    display: flex;
    gap: 20px;
  }

  h2 {
    font-size: 30px;
    font-weight: bolder;
    color: skyblue;
  }
`;

export const IconButton = styled.button`
  font-size: 40px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: skyblue;
  cursor: pointer;
`;

export default DataGraph;
