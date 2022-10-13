import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
  excludeDates,
}) => {
  return (
    <CalendarContainer>
      <div>
        <Text>체크인</Text>
        <DatePicker
          selected={startDate}
          onChange={handleChangeStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          maxDate={endDate}
          excludeDates={excludeDates}
        />
      </div>
      <div>
        <Text>체크아웃</Text>
        <DatePicker
          selected={endDate}
          onChange={handleChangeEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          excludeDates={excludeDates}
        />
      </div>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .react-datepicker-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    .react-datepicker__input-container {
      input {
        margin-left: 10px;
        width: 90px;
        border: none;
        font-size: 16px;
      }
    }
  }
`;

const Text = styled.div`
  font-size: 16px;
  margin-left: 20px;
`;
