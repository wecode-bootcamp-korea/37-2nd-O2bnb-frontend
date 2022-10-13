import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../Calendar";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function ItemDetailReservation({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
  excludeDates,
  detail,
}) {
  const [guests, setGuests] = useState(1);

  const handleGuestPlus = () => {
    if (detail.guest_count > guests) {
      setGuests(prev => prev + 1);
    }
  };

  const handleGuestMinus = () => {
    if (guests > 1) {
      setGuests(prev => prev - 1);
    }
  };

  const getDate = () => {
    const filteredExcludeDate = [];
    for (let i = 0; i < excludeDates.length; i++) {
      const excludeDateTime = excludeDates[i].getTime();

      if (
        excludeDateTime > startDate.getTime() &&
        excludeDateTime < endDate.getTime()
      ) {
        filteredExcludeDate.push(excludeDateTime);
      }
    }

    return Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000) -
        filteredExcludeDate.length
    );
  };

  const price = Number(detail.price) * Number(getDate());
  const tax = Number(price * 0.1);
  const total = Number(price) + Number(tax);

  const startDaTeYear = startDate.getFullYear();
  const startDateMonth = startDate.getMonth();
  const startDateDay = startDate.getDate();
  const endDateYear = endDate.getFullYear();
  const endDateMonth = endDate.getMonth();
  const endDateDay = endDate.getDate();

  const guestsData = String(guests);
  const totalData = String(total);
  const startDateData = `${startDaTeYear}-${startDateMonth}-${startDateDay}`;
  const endDateData = `${endDateYear}-${endDateMonth}-${endDateDay}`;
  // const accessToken = localStorage.getItem("token");

  const submitReservation = () => {
    fetch(`http://10.58.52.123:3000/book/${1}`, {
      method: "POST",
      // headers: {
      //   authorization:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjUwNDA5NzZ9.y1_aofAxEpehGwNCCLnOYXnnaz05LCXYwdwJDfjOF8I",
      // },
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        price: totalData,
        guests: guestsData,
        startDate: startDateData,
        endDate: endDateData,
      }),
    }).then(res => res.json());
  };

  return (
    <ReservationContainer>
      <Price>
        {getDate()}박 ₩{price.toLocaleString()}
      </Price>
      <DateCheck>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
          excludeDates={excludeDates}
        />
      </DateCheck>
      <PeopleCheck>
        <div>
          <GuestMax>숙박 인원 : 최대 {detail.guest_count} 명</GuestMax>
          <GuestCount>
            <Count>
              <Guest>성인</Guest>
            </Count>
            <Count>
              <button onClick={handleGuestMinus}>
                <AiOutlineMinusCircle size={20} />
              </button>
              <Guest>{guests}</Guest>
              <button onClick={handleGuestPlus}>
                <AiOutlinePlusCircle size={20} />
              </button>
            </Count>
          </GuestCount>
        </div>
      </PeopleCheck>
      <ReservationButton onClick={submitReservation}>
        예약하기
      </ReservationButton>
      <ReservationWarning>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </ReservationWarning>
      <div>
        <ReservationPrice>
          <p>{getDate()}박</p>
          <p>₩{price.toLocaleString()}</p>
        </ReservationPrice>
        <ReservationPrice>
          <p>서비스 수수료</p>
          <p>₩{tax.toLocaleString()}</p>
        </ReservationPrice>
      </div>
      <TotalPrice>
        <p>총합계</p>
        <Total>₩{total.toLocaleString()}</Total>
      </TotalPrice>
    </ReservationContainer>
  );
}

export default ItemDetailReservation;

const ReservationContainer = styled.div`
  position: sticky;
  top: 10px;
  width: 250px;
  height: 340px;
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
`;

const DateCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  font-size: 12px;
`;

const Count = styled.div`
  width: 110px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PeopleCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: none;
  font-size: 12px;
`;

const Price = styled.div`
  padding: 10px;
`;

const Guest = styled.p`
  font-size: 16px;
`;

const ReservationButton = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  border: 1px solid pink;
  border-radius: 5px;
  background-color: #ff385c;
  color: white;
`;

const ReservationWarning = styled.p`
  margin-bottom: 10px;
  font-size: 10px;
  color: grey;
`;

const ReservationPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 14px;
  margin-bottom: 10px;
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid black;
  font-size: 14px;
`;

const GuestCount = styled.div`
  display: flex;
`;

const GuestMax = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 16px;
`;

const Total = styled.p``;
