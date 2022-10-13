import React, { useState } from "react";
import styled from "styled-components";

function FliterModal({ filterBtn, listData, setListData }) {
  const priceCalculator = [];
  listData.forEach(item => {
    priceCalculator.push(item.price);
  });

  const minPrice = Math.min.apply(null, priceCalculator);
  const maxPrice = Math.max.apply(null, priceCalculator);

  const [rangeMinPrice, setRangeMinPrice] = useState(minPrice);
  const [rangeMaxPrice, setRangeMaxPrice] = useState(maxPrice);

  const prcieRangeMinValueHandler = e => {
    setRangeMinPrice(e.target.value);
  };
  const prcieRangeMaxValueHandler = e => {
    setRangeMaxPrice(e.target.value);
  };

  const priceFilterBtn = () => {
    fetch(
      `http://10.58.52.191:3000/product/priceFilter?lowprice=${rangeMinPrice}&highprice=${rangeMaxPrice}`,
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjUwNDA5NzZ9.y1_aofAxEpehGwNCCLnOYXnnaz05LCXYwdwJDfjOF8I",
        },
        body: JSON.stringify(),
      }
    )
      .then(response => response.json())
      .then(result => setListData(result.message));
    filterBtn();
  };

  return (
    <div>
      <ModalBack>
        <ModalBox>
          <ModalTitle>가격 범위</ModalTitle>
          <ModalIntro>평균 1박 요금은 ₩29,332원 입니다.</ModalIntro>
          <ChartBox>
            <FilterPriceSlide>
              <FilterPriceSlideInner />
              <FilterPriceRangeWrap>
                <FilterPriceRangeMin
                  type="range"
                  value={rangeMinPrice}
                  min={minPrice}
                  max={maxPrice}
                  onChange={e => {
                    prcieRangeMinValueHandler(e);
                  }}
                />
                <FilterPriceRangeMax
                  type="range"
                  value={rangeMaxPrice}
                  min={minPrice}
                  max={maxPrice}
                  onChange={e => {
                    prcieRangeMaxValueHandler(e);
                  }}
                />
              </FilterPriceRangeWrap>
            </FilterPriceSlide>
            <FilterInputWrap>
              <FilterMinInput>
                <FilterMinInputText>최저 요금</FilterMinInputText>
                <FilterMinInputPrice>{rangeMinPrice}</FilterMinInputPrice>
              </FilterMinInput>
              <InpustMiddle>-</InpustMiddle>
              <FilterMaxInput>
                <FilterMaxInputText>최고 요금</FilterMaxInputText>
                <FilterMaxInputPrice>{rangeMaxPrice}</FilterMaxInputPrice>
              </FilterMaxInput>
            </FilterInputWrap>
          </ChartBox>
          <OnFilter onClick={priceFilterBtn}>확인</OnFilter>
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
  width: 35%;
  left: 30%;
  right: 30%;
  height: 4px;
  border-radius: 10px;
`;

const FilterPriceRangeWrap = styled.div`
  position: relative;
`;

const FilterPriceRangeMin = styled.input`
  position: absolute;
  top: -5px;
  height: 7px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`;

const FilterPriceRangeMax = styled(FilterPriceRangeMin)``;

const FilterInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 680px;
  margin-top: 50px;
`;

const FilterMinInput = styled.div`
  width: 330px;
  height: 50px;
  border: 2px solid gray;
  border-radius: 5px;
`;

const FilterMinInputText = styled.p`
  font-size: 14px;
  margin: 8px;
`;

const FilterMinInputPrice = styled.p`
  font-size: 14px;
  margin: 8px;
`;

const InpustMiddle = styled.p`
  font-size: 20px;
`;

const FilterMaxInput = styled(FilterMinInput)``;
const FilterMaxInputText = styled(FilterMinInputText)``;
const FilterMaxInputPrice = styled(FilterMinInputPrice)``;

const OnFilter = styled.button`
  position: absolute;
  bottom: 30px;
  width: 70px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
`;
