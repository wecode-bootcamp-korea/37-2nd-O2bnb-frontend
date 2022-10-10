import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WishMap from "./WishMap";
import Like from "../Main/Like";
import { ImShare2 } from "react-icons/im";
import { MdMoreHoriz } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WishList({ themeGrey, themePink }) {
  const [test, setTest] = useState([]);
  console.log(test);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  useEffect(() => {
    fetch("/data/강남구.json")
      .then(res => res.json())
      .then(result => {
        setTest(result);
      });
  }, []);

  return (
    <div>
      <WishWrap>
        <WishLeftWrap>
          <IconBox>
            <IconPositionBox>
              <ImShare2 size="18px" cursor="pointer" />
              <MdMoreHoriz size="30px" cursor="pointer" />
            </IconPositionBox>
          </IconBox>
          <WishTitle>위시리스트</WishTitle>
          {test.map(item => {
            return (
              <ContentsWrap key={item.id} onClick={() => console.log("ss")}>
                <ImgTest>
                  <Slider {...settings}>
                    {item.thumbnail_image_url.map(list => {
                      return (
                        <ImgBox key={list.id}>
                          <ContentsImg src={list} />
                        </ImgBox>
                      );
                    })}
                  </Slider>
                </ImgTest>
                <ContentsIntroWrap>
                  <IntroTitle />
                  <IntroText>{item.name}</IntroText>
                  <IntroRoom>최대 인원 3명, 원룸, 침대 1개, 욕실 1개</IntroRoom>
                  <IntroMorebox>
                    <IntroStar>5.0</IntroStar>
                    <IntroPrice>10000원/박</IntroPrice>
                  </IntroMorebox>
                </ContentsIntroWrap>
              </ContentsWrap>
            );
          })}
        </WishLeftWrap>
        <WishRightBox>
          <WishMap />
        </WishRightBox>
      </WishWrap>
    </div>
  );
}

export default WishList;

const WishWrap = styled.div`
  display: flex;
  width: 100%;
`;

const WishLeftWrap = styled.div`
  width: 50%;
`;

const WishRightBox = styled.div`
  width: 50%;
  margin-top: 110px;
  height: 700px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-right: 5px;
`;

const IconPositionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 40px;
`;

const WishTitle = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0 0 40px;
  font-size: 30px;
  font-weight: 700;
`;

const ContentsWrap = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
  border-width: 30%;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 400px;
`;

const ContentsImg = styled.img`
  width: 300px;
  height: 200px;
`;

const ContentsIntroWrap = styled.div`
  width: 320px;
  margin-top: 25px;
  margin-right: 30px;
`;

const IntroTitle = styled.p`
  font-size: 16px;
  color: gray;
`;

const IntroText = styled.p`
  margin-top: 5px;
  font-size: 20px;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000000;
`;

const IntroRoom = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #000000;
`;

const IntroMorebox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-top: 120px;
`;

const IntroStar = styled.p`
  font-size: 20px;
  color: #000000;
`;

const IntroPrice = styled.p`
  font-size: 20px;
  color: #000000;
`;

const ImgTest = styled.p`
  width: 340px;
  height: 280px;
`;
