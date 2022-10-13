import React, { useState, useEffect, useRef } from "react";
import { Link, useFetcher, useLocation, useNavigate } from "react-router-dom";
import UserModal from "./component/UserModal";
import SearchBox from "./component/SearchBox";
import MenuBox from "./component/MenuBox";
import styled from "styled-components";

function Nav(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchInputData, setSearchInputData] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  const [userData, setUserData] = useState([]);
  // const [filterData, setFilterData] = useState([]);
  const [searchResultModalOpen, setSearchResultModalOpen] = useState(false);
  const accessToken = localStorage.getItem("TOKEN");
  const refMenuBox = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  // console.log("pathname : ", pathname);

  useEffect(() => {
    fetch(
      `http://10.58.52.191:3000/product/searchName?keyword=${searchInputData}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then(res => res.json())
      .then(result => setSearchResultData(result.message));
  }, [searchInputData]);

  useEffect(() => {
    fetch(`http://10.58.52.191:3000/user/info`, {
      method: "GET",
      headers: {
        authorization: accessToken,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(res => res.json())
      .then(result => setUserData(result.message));
  }, []);

  const searchKeywordSubmit = e => {
    e.preventDefault();
    if (accessToken) {
      navigate(`/product/item-detail?${searchResultData[0]?.id}`);
      handleSearchResultModalClose();
      setSearchInputData("");
    } else if (!accessToken) {
      alert("검색하시려면 회원 가입이 필요합니다.");
    }
  };

  const handleInputData = e => {
    setSearchInputData(e.target.value);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const menuToggleClicked = () => {
    setMenuToggle(pre => !pre);
  };

  const closeMenu = e => {
    if (menuToggle && !refMenuBox.current.contains(e.target)) {
      setMenuToggle(false);
    }
  };

  const handleSearchResultModalOpen = () => {
    setSearchResultModalOpen(true);
  };

  const handleSearchResultModalClose = () => {
    setSearchResultModalOpen(false);
  };

  useEffect(() => {
    if (menuToggle) document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  useEffect(() => {
    setSearchInputData("");
  }, [navigate]);

  return (
    <HeadWrap pathname={pathname}>
      <Link to="/">
        <Logo src="../../../image/janghyun/100.png" alt="logo" />
      </Link>
      <SearchBox
        className="searchBoxWrap"
        handleInputData={handleInputData}
        searchInputData={searchInputData}
        setSearchInputData={setSearchInputData}
        searchResultData={searchResultData}
        searchKeywordSubmit={searchKeywordSubmit}
        // filterData={filterData}
        searchResultModalOpen={searchResultModalOpen}
        setSearchResultModalOpen={setSearchResultModalOpen}
        handleSearchResultModalOpen={handleSearchResultModalOpen}
        handleSearchResultModalClose={handleSearchResultModalClose}
      />
      <MenuBox
        className="menuBoxWrap"
        showModal={showModal}
        menuToggleClicked={menuToggleClicked}
        menuToggle={menuToggle}
        closeMenu={closeMenu}
        refMenuBox={refMenuBox}
        userData={userData}
      />
      {modalOpen && (
        <UserModal
          closeModal={closeModal}
          setMenuToggle={setMenuToggle}
          userData={userData}
        />
      )}
    </HeadWrap>
  );
}

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: ${props => (props.pathname === "/" ? "fixed" : "relative")};
  width: 100%;
  min-width: 1400px;
  height: 80px;
  margin: -80px 0 0 0;
  padding: 0 30px 0 30px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  background-color: #fff;
  z-index: 10;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export default Nav;
