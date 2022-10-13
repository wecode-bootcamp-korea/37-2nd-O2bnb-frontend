import React, { useEffect, useState } from "react";
import ItemDetailTitle from "./components/ItemDetailTitle";
import ItemDetailImages from "./components/ItemDetailImages";
import ItemDetailInfo from "./components/ItemDetailInfo/ItemDetailInfo";
import ItemDetailReview from "./components/ItemDetailReview/ItemDetailReview";
import ItemDetailMap from "./components/ItemDetailMap";
import ItemDetailHost from "./components/ItemDetailHost";

function ItemDetail() {
  const [detail, setDetail] = useState(null);
  const [reviewData, setReviewData] = useState({ star: null, reviews: [] });

  useEffect(() => {
    // "/data/ITEMDETAIL_DATA.json"
    fetch(`http://10.58.52.191:3000/product/detail/${29}`, {
      method: "GET",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjUwNDA5NzZ9.y1_aofAxEpehGwNCCLnOYXnnaz05LCXYwdwJDfjOF8I",
      },
    })
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(data => setDetail(data))
      .catch(error => console.log(error));
    // "/data/REIVIEW_DATA.json"
  }, []);

  useEffect(() => {
    fetch(`http://10.58.52.191:3000/reviews/${4}`, {
      method: "GET",
      // headers: {
      //   authorization:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjUwNDA5NzZ9.y1_aofAxEpehGwNCCLnOYXnnaz05LCXYwdwJDfjOF8I",
      // },
    })
      .then(res => res.json())
      .then(({ data }) => {
        setReviewData({ star: data.stars[0], reviews: data.reviews });
      })
      .catch(error => console.log(error));
  }, []);

  if (!detail) return <>loading..</>;

  return (
    <>
      <ItemDetailTitle
        detail={detail.message}
        star={reviewData.star}
        hostInfo={detail.message.hostInfo}
      />
      <ItemDetailImages detail={detail.message} />
      <ItemDetailInfo
        detail={detail.message}
        hostInfo={detail.message.hostInfo}
      />
      <ItemDetailReview star={reviewData.star} reviews={reviewData.reviews} />
      <ItemDetailMap detail={detail.message} />
      <ItemDetailHost hostInfo={detail.message.hostInfo} reviews={reviewData} />
    </>
  );
}

export default ItemDetail;
