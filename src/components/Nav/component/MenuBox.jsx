import React from "react";
import MenuListBox from "./MenuListBox";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

function MenuBox({
  showModal,
  menuToggleClicked,
  menuToggle,
  closeMenu,
  refMenuBox,
  userData,
}) {
  const accessToken = localStorage.getItem("TOKEN");

  return (
    <MenuBoxWrap ref={refMenuBox}>
      <MenuButton
        className="menuButton"
        menuToggle={menuToggle}
        closeMenu={closeMenu}
        onClick={menuToggleClicked}
      >
        <HamburgerButtonWrap>
          <GiHamburgerMenu font-size="17px" color="#555" />
        </HamburgerButtonWrap>
        <ProfileImageWrap>
          <ProfileImage
            src={
              accessToken
                ? userData.profile_image
                : "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
            }
            alt={accessToken ? userData.name : null}
          />
        </ProfileImageWrap>
      </MenuButton>
      {menuToggle ? <MenuListBox showModal={showModal} /> : ""}
    </MenuBoxWrap>
  );
}

const MenuBoxWrap = styled.div`
  flex-direction: column;
  position: relative;
  width: 100px;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 31px;
  box-shadow: ${props => (props.menuToggle ? "2px 2px 5px #aeaeae;" : "")};
  transition: 0.1s;

  &:hover {
    box-shadow: 2px 2px 5px #aeaeae;
    transition: 0.1s;
  }
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
  border-radius: 50%;
  overflow: hidden;
`;

export default MenuBox;
