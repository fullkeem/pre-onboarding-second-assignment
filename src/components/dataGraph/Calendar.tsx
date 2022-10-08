import styled from 'styled-components';
import { AiOutlineClose, AiOutlineSwapLeft, AiOutlineSwapRight } from 'react-icons/ai';
import { SelectDate } from '../../interface';
import { useEffect, useMemo, useState } from 'react';
import { IconButton } from './DataGraph';

interface CalendarProps {
  selectDate: SelectDate;
  setSelectDate: React.Dispatch<React.SetStateAction<SelectDate>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calendar = ({ selectDate: { day, month, year }, setSelectDate, setModal }: CalendarProps) => {
  const [addMonth, setAddMonth] = useState(0);

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (e.target.closest('button.close') || !e.target.closest('div.container')) {
          setModal(false);
        }
      }
    };

    window.addEventListener('click', closeHandler);

    return () => window.removeEventListener('click', closeHandler);
  }, []);

  const calenderList = useMemo(() => {
    const firstDate = new Date(year, month + addMonth, 1);
    const lastDate = new Date(year, month + addMonth + 1, 0);

    const beforeLastDate = new Date(year, month + addMonth, 0);
    const beforeDayList = [];

    for (let i = 0; i < firstDate.getDay(); i++) {
      beforeDayList.push({
        month: beforeLastDate.getMonth(),
        date: beforeLastDate.getDate() - firstDate.getDay() + i + 1,
      });
    }

    const curDayList = [];

    for (let i = 0; i < lastDate.getDate(); i++) {
      curDayList.push({
        month: firstDate.getMonth(),
        date: i + 1,
      });
    }

    const afterDayList = [];

    for (let i = 0; i < 42 - (beforeDayList.length + curDayList.length); i++) {
      afterDayList.push({
        month: firstDate.getMonth() + 1,
        date: i + 1,
      });
    }

    return [...beforeDayList, ...curDayList, ...afterDayList];
  }, [addMonth]);

  const changeDate = (pickData: { month: number; date: number }) => {
    if (pickData.month === new Date(year, month + addMonth, day).getMonth()) {
      setSelectDate({
        year: new Date(year, month + addMonth, day).getFullYear(),
        month: new Date(year, month + addMonth, day).getMonth(),
        day: pickData.date,
      });
      setModal(false);
    }
  };

  return (
    <StyledModal>
      <div className='container'>
        <StyledButton className='close'>
          <AiOutlineClose />
        </StyledButton>
        <div className='title'>
          <h3>{new Date(year, month + addMonth, day).getFullYear()}년</h3>
          <div className='textContainer'>
            <IconButton onClick={() => setAddMonth(addMonth - 1)}>
              <AiOutlineSwapLeft size={30} />
            </IconButton>
            <h2>{new Date(year, month + addMonth, day).getMonth() + 1 ? new Date(year, month + addMonth, day).getMonth() + 1 : 12}월</h2>
            <IconButton onClick={() => new Date(year, month + addMonth, day).getTime() < new Date().getTime() && setAddMonth(addMonth + 1)}>
              <AiOutlineSwapRight size={30} />
            </IconButton>
          </div>
        </div>
        <WeekList>
          {['일', '월', '화', '수', '목', '금', '토'].map(week => (
            <li key={week} className={week === '일' ? 'sunday' : ''}>
              {week}
            </li>
          ))}
        </WeekList>
        <StyledList>
          {calenderList.map(calender => (
            <li //
              key={`${calender.month}-${calender.date}`}
              className={calender.month === new Date(year, month + addMonth, day).getMonth() ? 'active' : ''}
              onClick={() => changeDate(calender)}
            >
              {calender.date}
            </li>
          ))}
        </StyledList>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  div.container {
    position: relative;
    border-radius: 10px;
    color: skyblue;
    background-color: white;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.title {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 20px;
      gap: 10px;

      div.textContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }
    }

    @media screen and (min-width: 800px) {
      padding: 20px;
    }

    h2 {
      text-align: center;
      font-size: 30px;
      color: skyblue;
      font-weight: bold;
    }
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  border: none;
  background-color: transparent;
  color: gray;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    right: 20px;
    top: 20px;
  }
`;

const WeekList = styled.ul`
  display: flex;
  width: 100%;

  li {
    width: calc(100% / 7);
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    font-weight: bold;

    &.sunday {
      color: red;
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: calc(100% / 7);
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgray;

    &.active {
      color: skyblue;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: skyblue;
        color: white;
      }
    }
  }
`;

export default Calendar;
