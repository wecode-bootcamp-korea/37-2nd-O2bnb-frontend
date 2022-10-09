import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Like({ themeGrey, themePink, likeType }) {
  const [isLike, setIsLike] = useState(likeType);

  const likeBtn = () => {
    setIsLike(!isLike);
  };

  return (
    <div>
      {isLike ? (
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

export default Like;
