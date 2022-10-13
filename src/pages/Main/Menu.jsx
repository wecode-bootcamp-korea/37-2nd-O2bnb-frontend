import React, { useState } from "react";
import styled from "styled-components";
import FliterModal from "./FliterModal";
import { TiThSmall } from "react-icons/ti";
import {
  RiAncientGateFill,
  RiBankFill,
  RiHomeGearFill,
  RiHotelFill,
  RiBuilding4Fill,
  RiHomeHeartFill,
  RiFilter3Fill,
} from "react-icons/ri";

function Menu({ themeGrey, themeBlack, test, listData, setListData }) {
  const menuList = [
    {
      id: 1,
      icon: <TiThSmall size="30" color={themeBlack} />,
      title: "All",
    },
    {
      id: 2,
      icon: <RiAncientGateFill size="30" color={themeBlack} />,
      title: "강남구",
    },
    {
      id: 3,
      icon: <RiBankFill size="30" color={themeBlack} />,
      title: "마포구",
    },
    {
      id: 4,
      icon: <RiHotelFill size="30" color={themeBlack} />,
      title: "중구",
    },
    {
      id: 5,
      icon: <RiHomeGearFill size="30" color={themeBlack} />,
      title: "서초구",
    },
    {
      id: 6,
      icon: <RiHomeHeartFill size="30" color={themeBlack} />,
      title: "영등포구",
    },
    {
      id: 7,
      icon: <RiBuilding4Fill size="30" color={themeBlack} />,
      title: "종로구",
    },
  ];

  const [isFilter, setIsFilter] = useState(false);

  const filterBtn = () => {
    setIsFilter(!isFilter);
  };

  return (
    <div>
      <MenuBox>
        <MenuTab>
          {menuList.map(item => {
            return (
              <MenuList key={item.id} onClick={() => test(item.title)}>
                {item.icon}
                <MenuFont>{item.title}</MenuFont>
              </MenuList>
            );
          })}
        </MenuTab>
        <FilterTab>
          <MenuBtn onClick={filterBtn} filterBtn={filterBtn}>
            <RiFilter3Fill size="28" color={themeGrey} />
            필터
          </MenuBtn>
          {isFilter && (
            <FliterModal
              filterBtn={filterBtn}
              listData={listData}
              setListData={setListData}
            />
          )}
        </FilterTab>
      </MenuBox>
    </div>
  );
}

export default Menu;

const MenuBox = styled.div`
  ${({ theme }) => theme.flexCenter}
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid #7171716c;
`;

const MenuList = styled.div`
  margin-top: 10px;
  width: 60px;
  height: 80px;
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  cursor: pointer;
`;

const MenuFont = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.black};
`;

const MenuTab = styled.div`
  width: 75%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FilterTab = styled.div`
  position: relative;
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 17px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  ${({ theme }) => theme.flexCenter}
`;
