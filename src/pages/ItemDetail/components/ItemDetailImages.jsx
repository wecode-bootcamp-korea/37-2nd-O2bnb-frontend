import React from "react";
import styled from "styled-components";

function ItemDetailImages({ detail }) {
  return (
    <ImageContainer>
      <Image
        url={detail.image_url[0]}
        margin="0 0 0 10px"
        width="500px"
        height="510px"
      />
      <div>
        <Image
          url={detail.image_url[1]}
          margin="10px"
          width="250px"
          height="250px"
        />
        <Image
          url={detail.image_url[2]}
          margin="10px"
          width="250px"
          height="250px"
        />
      </div>
      <div>
        <Image
          url={detail.image_url[3]}
          margin="10px 0"
          width="250px"
          height="250px"
        />
        <Image
          url={detail.image_url[4]}
          margin="10px 0"
          width="250px"
          height="250px"
        />
      </div>
    </ImageContainer>
  );
}

export default ItemDetailImages;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.url});
`;
