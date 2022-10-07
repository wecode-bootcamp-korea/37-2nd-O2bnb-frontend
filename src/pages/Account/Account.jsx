import React from "react";
import styled from "styled-components";

function Account() {
  return (
    <ProfileWrap>
      <LeftContent>
        <ProfileImageWrap>
          <ProfileImage src="" alt="pofileImage" />
          <ImageChangeBtn>사진 업데이트 하기</ImageChangeBtn>
        </ProfileImageWrap>
        <MemberRegistrationDataWrap>
          <MemberRegistrationConfirm>
            OO 회원 인증 완료
          </MemberRegistrationConfirm>
          <MemberRegistrationEmail>이메일 주소</MemberRegistrationEmail>
        </MemberRegistrationDataWrap>
      </LeftContent>
      <RightContent>
        <TitleH1>안녕하세요. 저는 OO 입니다.</TitleH1>
        <MemberRegistrationDate>회원가입일 : 2022</MemberRegistrationDate>
      </RightContent>
    </ProfileWrap>
  );
}

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1020px;
  min-height: 800px;
  margin: 0 auto;
`;

const LeftContent = styled.section`
  width: 300px;
  padding: 24px;
  background-color: #fefefe;
  border: 1px solid #eee;
  border-radius: 15px;
`;

const ProfileImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #eee;
`;

const ImageChangeBtn = styled.button`
  padding: 10px 0;
  font-size: 13px;
  color: #eee;
`;

const MemberRegistrationDataWrap = styled.div`
  padding: 30px 0;
  font-size: 19px;
  text-align: center;
`;

const MemberRegistrationConfirm = styled.p`
  padding: 30px;
  font-size: 19px;
  text-align: center;
`;

const MemberRegistrationEmail = styled.p`
  padding: 30px;
`;

const ProfileImage = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid #aaa;
  border-radius: 50%;
  background-color: yellow;
`;

const RightContent = styled.section`
  width: 690px;
  margin-left: 30px;
`;

const TitleH1 = styled.h1`
  padding: 20px 10px;
  font-size: 32px;
`;

const MemberRegistrationDate = styled.span`
  padding: 5px 10px;
`;
export default Account;
