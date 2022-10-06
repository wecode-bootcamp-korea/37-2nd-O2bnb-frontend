import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import List from "./List";
import Menu from "./Menu";

function Main() {
  const [currTab, setCurrTab] = useState("All");

  const test = id => {
    setCurrTab(id);
  };

  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch(`/data/${currTab}.json`)
      .then(response => response.json())
      .then(result => setListData(result));
  }, [currTab]);

  return (
    <div>
      <MainBox>
        <Menu
          themeGrey={theme.color.grey}
          themeBlack={theme.color.black}
          test={test}
        />
        <List
          themeGrey={theme.color.grey}
          themeBlack={theme.color.black}
          themePink={theme.color.pink}
          listData={listData}
        />
      </MainBox>
    </div>
  );
}

const MainBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Main;
