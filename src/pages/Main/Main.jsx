import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import List from "./List";
import Menu from "./Menu";

function Main() {
  const [currTab, setCurrTab] = useState("all");

  const test = id => {
    setCurrTab(id);
  };

  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch(`/data/${currTab}.json`)
      .then(response => response.json())
      .then(result => setListData(result));
  }, [currTab]);

  // useEffect(() => {
  //   fetch(`http://10.58.52.191:3000/product/${currTab}`, {
  //     headers: {
  //       authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjUwNDA5NzZ9.y1_aofAxEpehGwNCCLnOYXnnaz05LCXYwdwJDfjOF8I",
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setListData(result.message));
  // }, [currTab]);

  // const [mapList, setMapList] = useState([]);

  // useEffect(() => {
  //   fetch(`http://10.58.52.191:3000/product/map/all`, {
  //     headers: {
  //       authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjUwNDA5NzZ9.y1_aofAxEpehGwNCCLnOYXnnaz05LCXYwdwJDfjOF8I",
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log("ㄴㄴ", result));
  // }); 지도 데이터 잘 드렁옴

  return (
    <MainBox>
      <Menu
        themeGrey={theme.color.grey}
        themeBlack={theme.color.black}
        listData={listData}
        setListData={setListData}
        test={test}
      />
      <List
        themeGrey={theme.color.grey}
        themeBlack={theme.color.black}
        themePink={theme.color.pink}
        listData={listData}
      />
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Main;
