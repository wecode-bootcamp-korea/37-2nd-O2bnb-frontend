import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function User({ props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const data = USER_DATA.data;

  const newLocation = location.search;

  useEffect(() => {
    // 유저데이터
    fetch(`http://10.58.52.191:3000/user/signin${location.search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(res => res.json())
      .then(
        result => (
          localStorage.setItem("TOKEN", result.accessToken), navigate(`/`)
        )
      );
  }, []);

  return (
    <UserContent>
      유저 정보를 받아오는 중입니다. 잠시만 기다려 주세요!
    </UserContent>
  );
}

const UserContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75.5vh;
  font-size: 31px;
`;

const USER_DATA = {
  data: {
    id: "sdflsandflan1",
    name: "유재석",
    imageUrl:
      "https://mp-seoul-image-production-s3.mangoplate.com/452637/1168063_1639733462425_13128?fit=around|359:240&amp;crop=359:240;*,*&amp;output-format=jpg&amp;output-quality=80",
  },
};

export default User;
