import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const InlineCalendar = ({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
  excludeDates,
}) => {
  return (
    <CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        excludeDates={excludeDates}
        inline
        inputs={startDate}
      />
      <DatePicker
        selected={endDate}
        onChange={handleChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        excludeDates={excludeDates}
        inline
      />
    </CalendarContainer>
  );
};

export default InlineCalendar;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  .react-datepicker {
    border: none;
  }
`;
