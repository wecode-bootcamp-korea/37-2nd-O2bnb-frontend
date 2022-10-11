import React, { useState, useEffect } from "react";
import styled from "styled-components";
function Account() {
  const accessToken = localStorage.getItem("TOKEN");
  const [loginData, setLoginData] = useState([]);
  const [userImageUrl, setUserImageUrl] = useState("");
  const [newUserImageFile, setNewUserImageFile] = useState({});
  // console.log(loginData.imageUrl);
  useEffect(() => {
    if (accessToken) {
      fetch(`http://localhost:3000/data/JanghyunData/USER_DATA.json`, {
        // `http://192.168.0.1:3000/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then(res => res.json())
        .then(result => (console.log(result.data), setLoginData(result.data)));
    }
  }, []);
  const fileInput = React.useRef(null);
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
    console.log(e.target.files[0].name);
    encodeFileToBase64(e.target.files[0]);
    setNewUserImageFile(e.target.files[0]);
    if (accessToken) {
      fetch(`http://localhost:3000/data/JanghyunData/USER_DATA.json`, {
        // `http://192.168.0.1:3000/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: { image: `${e.target.files[0]}` },
      })
        .then(res => res.json())
        .then(result => (console.log(result.data), setLoginData(result.data)));
    }
  };
  return (
    <ProfileWrap>
      <LeftContent>
        <ProfileImageWrap>
          {userImageUrl ? (
            <ProfileImage src={userImageUrl} alt="pofileImage" />
          ) : (
            <ProfileImage src={loginData.imageUrl} alt="pofileImage" />
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
          <MemberRegistrationEmail>이메일 주소</MemberRegistrationEmail>
          <span>{loginData.mail}dbwotjr@gamil.com</span>
        </MemberRegistrationDataWrap>
      </LeftContent>
      <RightContent>
        <TitleH1>안녕하세요. 저는 {loginData.name} 입니다.</TitleH1>
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
  color: #eee;
  &:hover {
    color: #555;
  }
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
  padding: 30px;
  font-size: 19px;
  text-align: center;
`;
const MemberRegistrationEmail = styled.p`
  padding: 30px;
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
const MemberRegistrationDate = styled.span`
  padding: 5px 10px;
`;
export default Account;
