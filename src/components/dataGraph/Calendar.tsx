import styled from 'styled-components';
import { AiOutlineClose, AiOutlineSwapLeft, AiOutlineSwapRight } from 'react-icons/ai';
import { SelectDate } from '../../interface';
import { useEffect, useMemo } from 'react';
import { IconButton } from './DataGraph';

interface CalendarProps {
  selectDate: SelectDate;
  setSelectDate: React.Dispatch<React.SetStateAction<SelectDate>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calendar = ({ selectDate: { day, month, year }, setSelectDate, setModal }: CalendarProps) => {
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
    const firstDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0);

    const beforeLastDate = new Date(year, month - 1, 0);
    const beforeDayList = [];

    for (let i = 0; i < firstDate.getDay(); i++) {
      beforeDayList.push({
        month: beforeLastDate.getMonth(),
        date: beforeLastDate.getDate() - 5 + i,
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
  }, []);

  const changeDate = (pickData: { month: number; date: number }) => {
    if (pickData.month === month - 1) {
      if (pickData.date === day) {
        setModal(false);
      } else {
        setSelectDate({
          year,
          month,
          day: pickData.date,
        });
        setModal(false);
      }
    }
  };

  return (
    <StyledModal>
      <div className='container'>
        <StyledButton className='close'>
          <AiOutlineClose />
        </StyledButton>
        <div className='title'>
          <IconButton>
            <AiOutlineSwapLeft size={30} />
          </IconButton>
          <h2>{month}월</h2>
          <IconButton>
            <AiOutlineSwapRight size={30} />
          </IconButton>
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
              className={calender.month === month - 1 ? 'active' : ''}
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
      margin-bottom: 20px;
      gap: 10px;
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
