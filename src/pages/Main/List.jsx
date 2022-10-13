import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaMapMarkedAlt } from "react-icons/fa";
import MapModal from "./MapModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Like from "./Like";

function List({ themeGrey, themePink, listData }) {
  const [isMap, setIsMap] = useState(false);

  const mapBtn = () => {
    setIsMap(!isMap);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <ListBox>
        {listData.map(item => {
          return (
            <ListContent key={item.id + item.name}>
              <ListIconHeart>
                <Like
                  themeGrey={themeGrey}
                  themePink={themePink}
                  likeType={item.like}
                />
              </ListIconHeart>
              <ListIconAroow>
                <FiArrowRightCircle
                  size="30px"
                  cursor="pointer"
                  color={themeGrey}
                />
              </ListIconAroow>
              <Slider {...settings}>
                {item.thumbnail_image_url.map(listImg => {
                  return (
                    <ListImgBox key={listImg.id}>
                      <ListImg src={listImg} />;
                    </ListImgBox>
                  );
                })}
              </Slider>
              <ListInfo>
                <ListText>
                  <ListTitle>{item.name}</ListTitle>
                  <ListMitter>{item.mitter}</ListMitter>
                  <ListDate>{item.create_at}</ListDate>
                  <ListPrice>{item.price}/박</ListPrice>
                </ListText>
                <StarBox>
                  <ListStart>★{item.star}</ListStart>
                </StarBox>
              </ListInfo>
            </ListContent>
          );
        })}
        <MapBtn onClick={mapBtn}>
          <MapText>지도 표시하기</MapText>
          <FaMapMarkedAlt color="white" size="18px" />
        </MapBtn>
      </ListBox>
      {isMap && <MapModal mapBtn={mapBtn} />}
    </>
  );
}

export default List;

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
`;

const ListContent = styled.div`
  position: relative;
  width: 20%;
  padding: 0 12px;
  margin-bottom: 30px;
`;

const ListImgBox = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

const ListImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ListIconHeart = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 20px;
  z-index: 1;
`;

const ListIconAroow = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 110px;
  right: 20px;
`;

const ListInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ListText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  width: calc(100% - 80px);
`;

const ListTitle = styled.strong`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ListMitter = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.grey};
`;

const ListDate = styled.p`
  font-size: 15px;
  line-height: 1.3em;
  color: ${({ theme }) => theme.color.grey};
`;

const ListPrice = styled.b`
  font-size: 16px;
  line-height: 1.3em;
`;

const StarBox = styled.div`
  width: 80px;
  margin-left: -5px;
  margin-top: 10px;
  text-align: right;
`;

const ListStart = styled.p`
  font-size: 16px;
  padding-left: 20px;
`;

const MapBtn = styled.div`
  position: fixed;
  left: 50%;
  bottom: 5%;
  width: 140px;
  height: 40px;
  margin-left: -70px;
  border-radius: 30px;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.flexCenter}
  padding-bottom: 4px;
  cursor: pointer;
`;

const MapText = styled.p`
  margin: 4px 8px 0 0;
  font-size: 14px;
`;
