import React from "react";
import styled from "styled-components";
import Map from "./Map";

function MapModal({ mapBtn }) {
  return (
    <div>
      <ModalBack onClick={mapBtn}>
        <ModalBox>
          <Map />
        </ModalBox>
      </ModalBack>
    </div>
  );
}

export default MapModal;

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
  width: 1200px;
  height: 680px;
  background-color: white;
`;
