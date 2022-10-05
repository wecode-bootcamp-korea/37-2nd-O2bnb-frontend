import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";

function Loading() {
  return (
    <>
      <ContentBack />
      <div className="contentWrap">
        <ContentWrap>
          <ScaleLoader
            color="#36d7b7"
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
        </ContentWrap>
      </div>
    </>
  );
}

const ContentBack = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
`;
const ContentWrap = styled.div`
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: white;
  border-radius: 2px;
`;
export default Loading;
