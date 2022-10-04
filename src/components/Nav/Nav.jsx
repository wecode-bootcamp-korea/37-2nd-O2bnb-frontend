import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserModal from "./component/UserModal";
import SearchBox from "./component/SearchBox";
import MenuBox from "./component/MenuBox";
import styled from "styled-components";

function Nav({ closeModal }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const menuToggleClicked = () => {
    setMenuToggle(pre => !pre);
  };

  return (
    <HeadWrap>
      <Link to="/">
        <Logo src="../../../image/janghyun/100.png" alt="logo" />
      </Link>

      <SearchBox className="searchBoxWrap" />

      <MenuBox
        className="menuBoxWrap"
        showModal={showModal}
        menuToggleClicked={menuToggleClicked}
        menuToggle={menuToggle}
      />

      {modalOpen && <UserModal setModalOpen={setModalOpen} />}
    </HeadWrap>
  );
}

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  margin: -80px 0 0 0;
  padding: 0 30px 0 30px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export default Nav;
