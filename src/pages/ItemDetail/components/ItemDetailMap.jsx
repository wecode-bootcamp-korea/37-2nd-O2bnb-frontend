/*global kakao */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function ItemDetailMap({ detail }) {
  const [mapLevel, setMapLevel] = useState(5);

  const handleMapLevelPlus = () => {
    if (mapLevel < 9) setMapLevel(prev => prev + 1);
  };

  const handleMapLevelMinus = () => {
    if (mapLevel > 1) setMapLevel(prev => prev - 1);
  };

  const title = detail.name;
  const lat = detail.latitude;
  const lng = detail.longitude;

  useEffect(() => {
    mapscript();
  }, [mapLevel]);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: Number(mapLevel),
    };

    //map
    const map = new kakao.maps.Map(container, options);

    // 마커를 생성합니다
    new kakao.maps.Marker({
      //마커가 표시 될 지도
      map: map,
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(lat, lng),
      //마커에 hover시 나타날 title
      title: title,
    });
  };

  return (
    <MapContainer>
      <Map>
        <div id="map" style={{ width: "90%", height: "90%" }} />
      </Map>
      <Button onClick={handleMapLevelMinus}>
        <AiOutlinePlusSquare />
      </Button>
      <Button onClick={handleMapLevelPlus} margin="75px">
        <AiOutlineMinusSquare />
      </Button>
    </MapContainer>
  );
}

export default ItemDetailMap;

const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Map = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 600px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 40px;
  margin-top: 40px;
  margin-right: 100px;
  top: 20px;
  right: 0px;
  z-index: 5;
  margin-top: ${props => props.margin};
`;
