import { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { BtnPropsData, Data } from '../../interface';
import styled from 'styled-components';

const ReuseButton = ({ background, text }: BtnPropsData) => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Data>(
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/972d2f5e-fbe2-4377-91ab-7b69da3c922f/thingspeak-feed-response.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221007T131538Z&X-Amz-Expires=86400&X-Amz-Signature=c948acccf4da1d6b5b0e7e34c6cea4205e217e91bb1f1277be4a87164691113f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22thingspeak-feed-response.json%22&x-id=GetObject'
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ];
  return (
    <>
      <Button background={background}>{text}</Button>
      <CSVLink data={csvData}>Download me</CSVLink>
    </>
  );
};

const Button = styled.button<{ background: string }>`
  display: flex;
  padding: 10px 15px;

  background-color: ${props => props.background};
  border: 0;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  text-decoration: none;

  transition: box-shadow 200ms ease-out;

  &:hover {
    cursor: pointer;
  }
`;

export default ReuseButton;
