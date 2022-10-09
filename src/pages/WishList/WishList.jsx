import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

function WIshList() {
  return (
    <div>
      <WishBox>
        <WishTitle>위시리스트</WishTitle>
      </WishBox>
    </div>
  );
}

export default WIshList;

const WishBox = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
`;

const WishTitle = styled.h1`
  position: absolute;
  top: 70px;
  left: 200px;
  font-size: 30px;
  font-weight: 700;
`;

const WishContents = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
`;
