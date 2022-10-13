import React from "react";
import styled from "styled-components";
import {
  AMENITIES_SAFETY,
  AMENITIES_OUTDOOR,
  AMENITIES_RESTROOM,
  AMENITIES_KITCHEN,
  AMENITIES_OTHER_FACILITIES,
  AMENITIES_BATHROOM,
} from "./AMENITIS_DATA";

function ModalAmenities({ handleModal }) {
  return (
    <ModalBack onClick={handleModal}>
      <ModalBox>
        <Amenities>
          <Title>욕실</Title>
          {AMENITIES_BATHROOM.map(({ id, products, img }) => {
            return (
              <ItemConTainer key={id}>
                <Image src={img} alt="#" />
                <Product>{products}</Product>
              </ItemConTainer>
            );
          })}
          <Title>화장실</Title>
          {AMENITIES_RESTROOM.map(({ id, products, img }) => {
            return (
              <ItemConTainer key={id}>
                <Image src={img} alt="#" />
                <Product>{products}</Product>
              </ItemConTainer>
            );
          })}
          <Title>주방</Title>
          {AMENITIES_KITCHEN.map(({ id, products, img }) => {
            return (
              <ItemConTainer key={id}>
                <Image src={img} alt="#" />
                <Product>{products}</Product>
              </ItemConTainer>
            );
          })}
          <Title>구급약품</Title>
          {AMENITIES_SAFETY.map(({ id, products, img }) => {
            return (
              <ItemConTainer key={id}>
                <Image src={img} alt="#" />
                <Product>{products}</Product>
              </ItemConTainer>
            );
          })}
          <Title>야외</Title>
          {AMENITIES_OUTDOOR.map(({ id, products, img }) => {
            return (
              <ItemConTainer key={id}>
                <Image src={img} alt="#" />
                <Product>{products}</Product>
              </ItemConTainer>
            );
          })}
          <Title>주차장 및 기타 시설</Title>
          {AMENITIES_OTHER_FACILITIES.map(({ id, products, img }) => {
            return (
              <ItemConTainer key={id}>
                <Image src={img} alt="#" />
                <Product>{products}</Product>
              </ItemConTainer>
            );
          })}
        </Amenities>
      </ModalBox>
    </ModalBack>
  );
}

export default ModalAmenities;

const Amenities = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 58vw;
  height: 80vh;
`;

const ItemConTainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  margin: 15px;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const Product = styled.p`
  display: flex;
  font-size: 15px;
  width: 50vw;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 20px;
`;

const ModalBack = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004b;
  z-index: 2;
`;

const ModalBox = styled.div`
  border-radius: 10px;
  ${({ theme }) => theme.flexCenter}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow-y: scroll;
`;
