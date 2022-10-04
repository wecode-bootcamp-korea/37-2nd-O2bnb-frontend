import React from "react";
import MenuListBox from "./MenuListBox";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

function MenuBox({ showModal, menuToggleClicked, menuToggle }) {
  return (
    <MenuBoxWrap>
      <MenuButton
        className="menuButton"
        onClick={menuToggleClicked}
        menuToggle={menuToggle}
      >
        <HamburgerButtonWrap>
          <GiHamburgerMenu font-size="17px" color="#555" />
        </HamburgerButtonWrap>
        <ProfileImageWrap>
          <ProfileImage
            src="../../../image/janghyun/100.png"
            alt="profileImage"
          />
        </ProfileImageWrap>
      </MenuButton>
      {menuToggle ? <MenuListBox showModal={showModal} /> : ""}
    </MenuBoxWrap>
  );
}

const MenuBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100px;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 31px;
  box-shadow: ${props => (props.menuToggle ? "2px 2px 5px #aeaeae;" : "")};
  transition: 0.1s;
`;

const HamburgerButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ProfileImageWrap = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #eee;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default MenuBox;
