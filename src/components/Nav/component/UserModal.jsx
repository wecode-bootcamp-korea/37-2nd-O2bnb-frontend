import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

function UserModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleTemporaryMessage = () => {
    alert("카카오 로그인을 이용해 주세요! :)");
  };

  return (
    <UserModalContainer className="userModalContainer" onClick={closeModal}>
      <ModalBox>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
        <Title>로그인 또는 회원가입</Title>
        <WelcomeComment>O2BnB에 오신 것을 환영합니다.</WelcomeComment>
        <UserDataForm>
          <UserIdInput placeholder="이메일" type="email" />
          <SubmitButton onClick={handleTemporaryMessage}>계속</SubmitButton>
          <CenterLine>또는</CenterLine>
          <KakakoBtn>
            <KakaoBubble>
              <IconWrap>
                <RiKakaoTalkFill
                  font-size="21px"
                  color="#3C2622"
                  className="kakaoIcon"
                />
              </IconWrap>
              카카오로 로그인 하기
            </KakaoBubble>
          </KakakoBtn>
          <FacebookBtn onClick={handleTemporaryMessage}>
            <IconWrap>
              <BsFacebook font-size="21px" color="#1977F1" />
            </IconWrap>
            페이스북으로 로그인 하기
          </FacebookBtn>
          <GoogleBtn onClick={handleTemporaryMessage}>
            <IconWrap>
              <FcGoogle font-size="21px" />
            </IconWrap>
            구글로 로그인 하기
          </GoogleBtn>
          <AppleBtn onClick={handleTemporaryMessage}>
            <IconWrap>
              <AiFillApple font-size="21px" />
            </IconWrap>
            애플 계정으로 로그인 하기
          </AppleBtn>
        </UserDataForm>
      </ModalBox>
    </UserModalContainer>
  );
}

const UserModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  width: 568px;
  height: 610px;
  margin: calc(0% - 305px) auto 0;
  padding: 24px 0;
  background-color: #fff;
  border-radius: 12px;
  box-sizing: border-box;
`;

const CloseBtn = styled.span`
  position: absolute;
  top: 25px;
  left: 25px;
  font-size: 21px;
  cursor: pointer;
`;

const Title = styled.h1`
  width: 100%;
  padding: 10px 24px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #eee;
`;

const WelcomeComment = styled.p`
  padding: 40px 30px 10px;
  font-size: 21px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.grey};
`;

const CenterLine = styled.div`
  position: relative;
  display: block;
  margin: 30px 24px 20px;
  font-size: 12px;
  text-align: center;
  background-color: inherit;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: -5px;
    left: 35px;
    width: 230px;
    height: 10px;
    border-bottom: 2px solid #eee;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: -5px;
    right: 35px;
    width: 230px;
    height: 10px;
    border-bottom: 2px solid #eee;
  }
`;

const UserDataForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const UserIdInput = styled.input`
  width: 520px;
  height: 50px;
  margin: 10px 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;

  &:focus {
    border: 2px solid #c13515;
    background-color: #fef7f5;
  }
`;

const SubmitButton = styled.button`
  width: 520px;
  height: 50px;
  margin: 10px 10px 0;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border: 1px solid ${({ theme }) => theme.color.pink};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.pink};
`;

const KakakoBtn = styled.div`
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 10px 0;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: 1px solid #111;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const KakaoBubble = styled.div``;

const FacebookBtn = styled.div`
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 10px 0;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: 1px solid #111;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const GoogleBtn = styled.div`
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 10px 0;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: 1px solid #111;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const AppleBtn = styled.div`
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 10px 0;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: 1px solid #111;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const IconWrap = styled.div`
  position: relative;
  position: absolute;
  top: 12px;
  left: 24px;
  display: inline-block;

  .kakaoIcon {
    background-color: #f2da01;
  }
`;

export default UserModal;
