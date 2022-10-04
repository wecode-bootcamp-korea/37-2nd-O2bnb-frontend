import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import UserModal from "./UserModal";

function User() {
  return <UserContent>유저 정보 받아오는 중...</UserContent>;
}

const UserContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75.5vh;
  font-size: 31px;
`;

export default User;
