/*global kakao */
import React, { useEffect } from "react";

function WishMap() {
  let positions = [
    {
      title: "강남구1",
      lat: 37.4823041565813,
      lng: 127.043353985274,
    },
  ];

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.4823041565813, 127.043353985274),
      level: 1,
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

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
}

export default WishMap;
