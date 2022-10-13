import React, { useState } from "react";
import styled from "styled-components";

function FliterModal({ filterBtn }) {
  return (
    <div>
      <ModalBack>
        <ModalBox onClick={filterBtn}>
          <ModalTitle>가격 범위</ModalTitle>
          <ModalIntro>평균 1박 요금은 ₩29,332원 입니다.</ModalIntro>
          <ChartBox>
            <FilterPriceSlide>
              <FilterPriceSlideInner />
            </FilterPriceSlide>
            <FilterPriceRangeWrap>
              <FilterPriceRangeMin />
              <FilterPriceRangeMax />
            </FilterPriceRangeWrap>
          </ChartBox>
        </ModalBox>
      </ModalBack>
    </div>
  );
}

export default FliterModal;

const ModalBack = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000004b;
  z-index: 2;
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
`;

const ModalTitle = styled.strong`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 20px;
  color: black;
`;

const ModalIntro = styled.p`
  position: absolute;
  top: 60px;
  left: 30px;
  font-size: 18px;
  color: #616161;
`;

const ChartBox = styled.div`
  position: absolute;
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 280px;
  border-radius: 5px;
  background: #6c6c6c;
`;

const FilterPriceSlide = styled.div`
  position: relative;
  height: 4px;
  width: 650px;
  border-radius: 10px;
  background-color: #dddddd;
`;

const FilterPriceSlideInner = styled.div`
  position: absolute;
  left: 30%;
  right: 30%;
  height: 4px;
  border-radius: 10px;
  background-color: #b0b0b0;
`;

const FilterPriceRangeWrap = styled.div`
  position: relative;
`;

const FilterPriceRangeMin = styled.input`
  position: absolute;
  top: -9px;
  height: 7px;
  width: 100%;
  -webkit-appearance: none;
  background: none;

  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
  }
`;

const FilterPriceRangeMax = styled(FilterPriceRangeMin)``;
