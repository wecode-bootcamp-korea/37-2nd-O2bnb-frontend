import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Account() {
  const accessToken = localStorage.getItem("TOKEN");
  const [loginData, setLoginData] = useState([]);
  const [userImageUrl, setUserImageUrl] = useState("");
  const [newUserImageFile, setNewUserImageFile] = useState({});
  const fileInput = React.useRef(null);
  const currentDate = loginData.created_at;
  const newCurrentDate = new Date(currentDate);
  const year = newCurrentDate.getFullYear();
  const month = newCurrentDate.getMonth();

  useEffect(() => {
    fetch(`http://10.58.52.191:3000/user/info`, {
      method: "GET",
      headers: {
        authorization: accessToken,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(res => res.json())
      .then(result => setLoginData(result.message));
  }, []);

  const handleImageFileInput = e => {
    fileInput.current.click();
  };

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setUserImageUrl(reader.result);
        resolve();
      };
    });
  };

  const handleImageChange = e => {
    encodeFileToBase64(e.target.files[0]);
    setNewUserImageFile(e.target.files[0]);
    if (accessToken) {
      fetch(`http://localhost:3000/data/JanghyunData/USER_DATA.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: { image: `${e.target.files[0]}` },
      })
        .then(res => res.json())
        .then(result => setLoginData(result.data));
    }
  };

  return (
    <ProfileWrap>
      <LeftContent>
        <ProfileImageWrap>
          {userImageUrl ? (
            <ProfileImage src={userImageUrl} alt="pofileImage" />
          ) : (
            <ProfileImage src={loginData.profile_image} alt="pofileImage" />
          )}
          <ImageChangeBtn onClick={handleImageFileInput}>
            사진 업데이트 하기
          </ImageChangeBtn>
          <ImageChangeInput
            type="file"
            ref={fileInput}
            onChange={handleImageChange}
          />
        </ProfileImageWrap>
        <MemberRegistrationDataWrap>
          <MemberRegistrationConfirm>
            {loginData.name}님 회원인증 완료
          </MemberRegistrationConfirm>
        </MemberRegistrationDataWrap>
      </LeftContent>
      <RightContent>
        <TitleH1>안녕하세요! {loginData.name} 님.</TitleH1>
        <MemberRegistrationDate>
          Member Since
          <MemberRegistrationDateSpan>
            {year}. {month}.
          </MemberRegistrationDateSpan>
        </MemberRegistrationDate>
        <UserInfoTable>
          <TableTr>
            <TableTh>실명</TableTh>
            <TableTd>{loginData.name}</TableTd>
          </TableTr>
          {loginData.birth ? (
            <TableTr>
              <TableTh>생년월일</TableTh>
              <TableTd>{loginData.birth}</TableTd>
            </TableTr>
          ) : null}

          <TableTr>
            <TableTh>이메일</TableTh>
            <TableTd>{loginData.email}</TableTd>
          </TableTr>
        </UserInfoTable>
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
  padding: 50px 0;
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
  color: #fff;
  cursor: default;
`;

const ImageChangeInput = styled.input`
  display: none;
`;

const MemberRegistrationDataWrap = styled.div`
  padding: 30px 0;
  font-size: 19px;
  text-align: center;
`;

const MemberRegistrationConfirm = styled.p`
  padding: 30px 10px;
  font-size: 19px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border: 1px solid #aaa;
  border-radius: 50%;
`;

const RightContent = styled.section`
  width: 690px;
  margin-left: 30px;
`;

const TitleH1 = styled.h1`
  padding: 20px 10px;
  font-size: 32px;
`;

const MemberRegistrationDate = styled.p`
  margin: 10px 0 10px;
  padding: 10px 20px 0;
  color: #999;
`;

const MemberRegistrationDateSpan = styled.span`
  margin-left: 60px;
  color: #111;
`;

const UserInfoTable = styled.table`
  width: 450px;
  margin: 30px 0;
`;

const TableTr = styled.tr`
  border-bottom: 1px solid #efefef;
`;

const TableTh = styled.th`
  width: 35%;
  padding: 30px 20px 10px;
  font-size: 17px;
  color: #999;
  text-align: left;
`;

const TableTd = styled.th`
  padding: 30px 20px 10px;
  font-size: 17px;
  color: #111;
  text-align: left;
`;

export default Account;
