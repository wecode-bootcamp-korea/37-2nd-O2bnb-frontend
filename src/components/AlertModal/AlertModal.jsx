import React from "react";
import styled from "styled-components";

const AlertModal = ({ title, comment, closeModal, confirm }) => {
  return (
    <AlertModalBack onClick={closeModal}>
      <Modal>
        <Title>{title}</Title>
        <Comment>{comment}</Comment>
        <Confirm onClick={confirm}>확인</Confirm>
      </Modal>
    </AlertModalBack>
  );
};

export default AlertModal;

const AlertModalBack = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
`;

const Modal = styled.div`
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: white;
  border-radius: 2px;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 25px;
`;

const Comment = styled.p`
  margin-bottom: 30px;
  /* background-color: ${({ theme }) => theme.color.grey}; */
`;

const Confirm = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 6px;
  border: 1px solid #201f1f;
  color: #201f1f;
  cursor: pointer;
  font-size: 12px;
  line-height: 12px;
  background: inherit;
  box-shadow: none;
`;
