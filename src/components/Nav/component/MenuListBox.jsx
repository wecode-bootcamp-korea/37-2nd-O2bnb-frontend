import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function MenuListBox({ showModal, closeMenu }) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("TOKEN");
  const deleteToken = () => {
    localStorage.removeItem("TOKEN");
    navigate(`/`);
  };

  return (
    <MenuListBoxWrap className="menuBox">
      <MemuList>
        {/* {MENU_LIST?.map(menuList => (
          <Link
            key={menuList.id}
            to={menuList.url}
            onClick={menuList.id === 1 ? showModal : ""}
          >
            <MemuListItem>{menuList.item}</MemuListItem>
          </Link>
        ))} */}
        {!accessToken ? (
          <Link onClick={showModal}>
            <MemuListItem>로그인 / 회원가입</MemuListItem>
          </Link>
        ) : (
          ""
        )}
        <Link
          to={accessToken && "/wish-list"}
          onClick={!accessToken && showModal}
        >
          <MemuListItem>위시리스트</MemuListItem>
        </Link>
        <Link
          to={accessToken && "/account"}
          onClick={!accessToken && showModal}
        >
          <MemuListItem>프로필</MemuListItem>
        </Link>
        {accessToken ? (
          <Link to="/" onClick={deleteToken}>
            <MemuListItem>로그아웃</MemuListItem>
          </Link>
        ) : (
          ""
        )}
      </MemuList>
    </MenuListBoxWrap>
  );
}

const MenuListBoxWrap = styled.div`
  display: block;
  position: absolute;
  top: 42px;
  right: 0px;
  width: 240px;
  margin: 20px 0 0;
  padding: 0px 10px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #aeaeae;
  background-color: #fff;
`;

const MemuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MemuListItem = styled.li`
  width: 100%;
  padding: 15px 10px;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
`;

const MENU_LIST = [
  {
    id: 1,
    item: "로그인 / 회원가입",
    url: "",
  },
  {
    id: 2,
    item: "위시리스트",
    url: "/wishlist",
  },
  {
    id: 3,
    item: "프로필",
    url: "/profile",
  },
  {
    id: 4,
    item: "로그아웃",
    url: "/",
  },
];

export default MenuListBox;
