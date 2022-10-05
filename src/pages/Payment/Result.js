import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Result() {
  useEffect(() => {
    fetch("http://10.58.52.123:3000/book/payment")
      .then(res => res.json())
      .then(data => {
        setInfo(...data.data);
        setDate(today);
      });
  }, []);
  // const makeDate = new Date();
  // const today = document.write(makeDate);

  const [info, setInfo] = useState({});
  console.log(info);
  const [date, setDate] = useState("");

  const dt = new Date();

  const today = `${dt.getFullYear()}년${dt.getMonth() + 1}월${dt.getDay()}일`;

  const { price, guest_count, start_date, end_date } = info;

  const bookingDate = new Date(start_date);
  const bookEndDate = new Date(end_date);

  const AccommodationDate = `${bookingDate.getFullYear()}년${
    bookingDate.getMonth() + 1
  }월${bookingDate.getDate()}일~${bookEndDate.getDate()}일`;
  console.log(AccommodationDate);

  return (
    <AllWrap>
      <ResultWrap>
        <ResultHeader>
          <CheckIcon src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png" />
          <span>주문완료</span>
        </ResultHeader>
        <ContentWrap>
          <div className="ContentWrapLeft">
            <ContentLeft>주문일자</ContentLeft>
            <ContentLeft>숙박날짜</ContentLeft>
            <ContentLeft>인원수</ContentLeft>
            <ContentLeft>가격</ContentLeft>
            <ContentLeft>입금계좌</ContentLeft>
          </div>
          <div className="ContentWrapRight">
            <ContentRight>{date}</ContentRight>
            <ContentRight>{AccommodationDate}</ContentRight>
            <ContentRight>{guest_count}</ContentRight>
            <ContentRight>{price}</ContentRight>
            <ContentRight>신한 261-44-00521</ContentRight>
          </div>
        </ContentWrap>
      </ResultWrap>
    </AllWrap>
  );
}

const AllWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eff3f4;
  border-radius: 15px;
  width: 250px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 1px 1px 10px 2px #e3e7ea;
`;

const ResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eff3f4;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 10px;
  margin-top: 10px;
`;

const ContentLeft = styled.div`
  font-size: 13px;
  padding: 10px;
`;

const ContentRight = styled.div`
  font-size: 13px;
  padding: 10px;
`;

export default Result;
