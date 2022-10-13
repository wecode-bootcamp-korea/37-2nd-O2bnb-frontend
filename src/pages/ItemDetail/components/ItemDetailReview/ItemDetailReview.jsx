import React from "react";
import styled from "styled-components";

function ItemDetailReview({ star, reviews }) {
  return (
    <>
      <Star>
        {star && (
          <StarContainer>
            <StarPoint>
              <StarText>청결도</StarText>
              <Meter min="0" max="5" value={star.cleanAvg} />
              <StarTextPoint>{Number(star.cleanAvg).toFixed(2)}</StarTextPoint>
            </StarPoint>
            <StarPoint>
              <StarText>위치</StarText>
              <Meter min="0" max="5" value={star.addressAvg} />
              <StarTextPoint>
                {Number(star.addressAvg).toFixed(2)}
              </StarTextPoint>
            </StarPoint>
            <StarPoint>
              <StarText>가격 대비 만족도</StarText>
              <Meter min="0" max="5" value={star.priceAvg} />
              <StarTextPoint>{Number(star.priceAvg).toFixed(2)}</StarTextPoint>
            </StarPoint>
          </StarContainer>
        )}
      </Star>
      <ReviewContainer>
        {reviews.map(({ id, created_at, content, name, profile_image }) => {
          return (
            <Review key={id}>
              <ReviewInfo>
                <Image src={profile_image} alt="리뷰이미지" />
                <UserInfo>
                  <Name>{name}</Name>
                  <Name>{created_at}</Name>
                </UserInfo>
              </ReviewInfo>
              <ReviewContent>
                <p>{content}</p>
              </ReviewContent>
            </Review>
          );
        })}
      </ReviewContainer>
    </>
  );
}

export default ItemDetailReview;

const Star = styled.div`
  margin-left: 50px;
`;

const StarPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 600px;
  padding: 5px 10px;
`;

const StarContainer = styled.div`
  margin-left: 140px;
`;

const StarText = styled.div`
  width: 130px;
`;

const StarTextPoint = styled.div`
  margin-left: 40px;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 25px 0 50px 0;
`;

const Review = styled.div`
  width: 500px;
  margin-left: 50px;
`;

const ReviewInfo = styled.div`
  display: flex;
  font-size: 16px;
  padding: 20px 0;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
`;

const ReviewContent = styled.div`
  font-size: 16px;
`;

const Meter = styled.meter`
  width: 300px;
`;

const Name = styled.p`
  padding: 3px 0;
`;
