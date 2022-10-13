import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { IoMdMedal } from "react-icons/io";
import { BsFillPersonCheckFill } from "react-icons/bs";

function ItemDetailHost({ hostInfo, reviews }) {
  const host = new Date(hostInfo.created_at).toLocaleDateString();
  return (
    <Host>
      <HostTitle>
        <TitleHeader>
          <Image />
          <TitleInfo>
            <h1>호스트 : {hostInfo.name}</h1>
            <p>회원 가입일 : {host}</p>
          </TitleInfo>
        </TitleHeader>
        <HostCertification>
          <AiFillStar />
          <HostText>후기 {hostInfo.reviewCount}개</HostText>
          <IoMdMedal />
          <HostText>{hostInfo.grade}</HostText>
          <BsFillPersonCheckFill />
          <HostText>본인 인증 완료</HostText>
        </HostCertification>
        <HostCertificationInfo>{hostInfo.content}</HostCertificationInfo>
      </HostTitle>
      <HostInfo>
        <HostCall>응답률: 100%</HostCall>
        <HostCall>응답 시간 : 몇 시간 이내</HostCall>
        <HostInfoButton>호스트에게 연락하기</HostInfoButton>
        <HostInfoMessage>
          안전한 결제를 위해 에어비엔비 웹사이트나 앱 외부에서 송금하거나 대화를
          나누지 마세요.
        </HostInfoMessage>
      </HostInfo>
    </Host>
  );
}

export default ItemDetailHost;

const Host = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
`;

const HostTitle = styled.div`
  margin: 30px;
  width: 400px;
`;

const TitleInfo = styled.div`
  margin-left: 20px;
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

const HostCertification = styled.div`
  display: flex;
  margin-top: 20px;
`;

const HostText = styled.div`
  margin-right: 20px;
`;

const HostCertificationInfo = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin: 20px 0;
`;

const HostInfo = styled.div`
  width: 400px;
  margin: 30px;
  margin-top: 50px;
`;

const HostInfoButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 10px;
`;

const HostCall = styled.p`
  margin-top: 10px;
`;

const HostInfoMessage = styled.p`
  font-size: 12px;
`;
