import React, { useEffect, useState } from "react";
import styled from "styled-components";

function WIshListNo() {
  const [likeList, setLikeList] = useState([]);
  console.log(likeList);

  useEffect(() => {
    fetch(`/data/강남구.json`)
      .then(response => response.json())
      .then(result => setLikeList(result));
  }, []);

  return (
    <div>
      <WishBox>
        <WishContents>
          <WishTitle>위시리스트</WishTitle>
          <ListContentsBox>
            {likeList.map(item => {
              return (
                <ListItem key={item.id}>
                  <ItemMainImg src={item.thumbnail_image_url[0]} />
                  <ItemSubImgBox>
                    <ItemSubImg src={item.thumbnail_image_url[1]} />
                    <ItemLastImg src={item.thumbnail_image_url[1]} />
                  </ItemSubImgBox>
                </ListItem>
              );
            })}
          </ListContentsBox>
        </WishContents>
      </WishBox>
    </div>
  );
}

export default WIshListNo;

const WishBox = styled.div`
  width: 100%;
`;

const WishContents = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 70px;
`;

const WishTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const ListContentsBox = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  display: flex;
  width: 30%;
  height: 230px;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 10px;
`;

const ItemMainImg = styled.img`
  width: 60%;
  height: 100%;
  border-right: 3px solid white;
`;

const ItemSubImgBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemSubImg = styled.img`
  width: 100%;
  height: 50%;
  background: #000;
`;

const ItemLastImg = styled.img`
  width: 100%;
  height: 50%;
  background: #000;
  border-top: 3px solid white;
`;
