import React, { useState, useEffect } from "react";
import ItemDetailReservation from "./components/ItemDetailReservation";
import styled from "styled-components";
import { BsDoorOpen, BsCalendar3 } from "react-icons/bs";
import { IoMdMedal } from "react-icons/io";
import InlineCalendar from "../InlineCalendar";
import ModalAmenities from "../Modal/ModalAmenities";

function ItemDetailInfo({ detail, hostInfo }) {
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [excludeDates, setExcludeDates] = useState([]);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleChangeStartDate = date => {
    setStartDate(date);
  };

  const handleChangeEndDate = date => {
    setEndDate(date);
  };

  useEffect(() => {
    setExcludeDates();
  }, []);

  return (
    <InfoWrapper>
      <div>
        <InfoContainer>
          <div>
            <Title>{hostInfo.name} 님이 호스팅 하는 전원 주택 전체</Title>
            <RoomCount>
              <Count>최대인원 {detail.guest_count}명</Count>
              <Count>침대 {detail.bed_count}개</Count>
              <Count>욕실 {detail.bathroom_count}개</Count>
            </RoomCount>
          </div>
          <Image />
        </InfoContainer>
        <Info>
          <Introduce>
            <BsDoorOpen size={20} />
            <Text>
              셀프 체크인
              <br />
              키패드를 이용해 체크인 하세요.
            </Text>
          </Introduce>
          <Introduce>
            <IoMdMedal size={23} />
            <Text>태훈님은 {hostInfo.grade}입니다.</Text>
          </Introduce>
          <Introduce>
            <BsCalendar3 size={60} />
            <Text>{hostInfo.content}</Text>
          </Introduce>
        </Info>
        <Info>
          <FontPink>에어커버</FontPink>
          <Text>
            모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
            경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
            포함됩니다.
          </Text>
        </Info>
        <Info>
          <Title>WELCOME-</Title>
          <Text>{detail.content}</Text>
        </Info>
        <Info>
          <Title>숙소 편의시설</Title>
          {detail.option.map(({ amenity, icon_url }, idx) => {
            return (
              <Amenities key={idx}>
                <AmenitiesImg src={icon_url} />
                <Text>{amenity}</Text>
              </Amenities>
            );
          })}
          <AmenitiesButton onClick={handleModal}>
            편의시설 모두 보기
            {openModal && <ModalAmenities handleModal={handleModal} />}
          </AmenitiesButton>
        </Info>
        <InfoCalendar>
          <Title />
          <InlineCalendar
            startDate={startDate}
            endDate={endDate}
            handleChangeStartDate={handleChangeStartDate}
            handleChangeEndDate={handleChangeEndDate}
            excludeDates={excludeDates}
          />
        </InfoCalendar>
      </div>
      <div>
        <ItemDetailReservation
          startDate={startDate}
          endDate={endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
          excludeDates={excludeDates}
          detail={detail}
        />
      </div>
    </InfoWrapper>
  );
}

export default ItemDetailInfo;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  padding-bottom: 50px;
  margin: 50px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  margin-right: 70px;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 0 20px 5px 0;
`;

const RoomCount = styled.div`
  display: flex;
`;

const Count = styled.p`
  margin-right: 10px;
`;

const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nMTPV9RiM_CysMUd7pQBFZD_EHklBTnkVQ&usqp=CAU);
`;

const Introduce = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Text = styled.p`
  margin-left: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const Info = styled.div`
  width: 600px;
  margin: 20px 0;
  padding-bottom: 20px;
`;

const FontPink = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.pink};
`;

const Amenities = styled.div`
  display: flex;
  padding: 5px;
`;

const AmenitiesImg = styled.img`
  width: 20px;
`;

const AmenitiesButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
`;

const InfoCalendar = styled.div`
  margin: 20px 0;
`;
