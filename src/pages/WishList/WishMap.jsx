/*global kakao */
import React, { useEffect } from "react";

function WishMap({ mapData }) {
  const { id, lat, long } = mapData;
  let positions = [
    {
      title: id,
      lat: Number(lat),
      lng: Number(long),
    },
  ];

  useEffect(() => {
    mapscript();
  }, [id]);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(Number(lat), Number(long)),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    positions.forEach(el => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default WishMap;
