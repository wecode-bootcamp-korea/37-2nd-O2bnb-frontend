import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function WishLike({ themeGrey, themePink, likeType }) {
  const [isLike, setIsLike] = useState(likeType);

  const likeBtn = () => {
    setIsLike(!isLike);
    if (isLike === true) {
      fetch(`http://192.168.161.223:3000/like/:${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(),
      })
        .then(response => response.json())
        .then(result => console.log(result));
    } else {
      fetch(`http://192.168.161.223:3000/like/:${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(),
      })
        .then(response => response.json())
        .then(result => console.log(result));
    }
  };

  return (
    <div>
      {!isLike ? (
        <AiFillHeart
          size="30px"
          cursor="pointer"
          color={themePink}
          onClick={likeBtn}
        />
      ) : (
        <AiOutlineHeart
          size="30px"
          cursor="pointer"
          color={themeGrey}
          onClick={likeBtn}
        />
      )}
    </div>
  );
}

export default WishLike;
