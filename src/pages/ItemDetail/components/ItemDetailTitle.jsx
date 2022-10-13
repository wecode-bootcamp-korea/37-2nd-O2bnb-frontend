import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { IoMdMedal } from "react-icons/io";
import { BiDownload } from "react-icons/bi";
import { GrMap } from "react-icons/gr";
import styled from "styled-components";

function ItemDetailTitle({ detail, star, hostInfo }) {
  return (
    <TitleContainer>
      <Title>
        {detail.name}, {detail.address}
      </Title>
      <div>
        <SubTitle>
          <div>
            <Button>
              <AiFillStar size={16} />
              {star && <p>{Number(star.totalAVG).toFixed(2)}</p>}
            </Button>
            <Button>
              <IoMdMedal size={16} />
              <p>{hostInfo.grade}</p>
            </Button>
            <Button>
              <GrMap size={16} />
              <p>{detail.address}</p>
            </Button>
          </div>
          <div>
            <Button>
              <BiDownload size={16} />
              <p>공유하기</p>
            </Button>
            <Button>
              <AiOutlineHeart size={16} />
              <p>저장</p>
            </Button>
          </div>
        </SubTitle>
      </div>
    </TitleContainer>
  );
}

export default ItemDetailTitle;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 70px;
`;

const Title = styled.h1`
  padding: 10px;
  font-size: 20px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 10px;
`;
