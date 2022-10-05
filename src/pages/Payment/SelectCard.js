import React from "react";
import { createContext } from "react";
import { useState } from "react";
import styled from "styled-components";

const SelectCard = ({ handleInput }) => {
  const options = [
    {
      value: "실시간계좌이체",
      name: "결제방식",
    },
    {
      value: "네이버페이",
      name: "결제방식",
      img: "./image/npay_20.png",
    },
    {
      value: "카카오페이",
      name: "결제방식",
      img: "https://developers.kakao.com/tool/resource/static/img/button/pay/payment_icon_yellow_small.png",
    },
    {
      value: "페이코페이",
      name: "결제방식",
      img: "./image/paycologo.png",
    },

    {
      value: "토스페이",
      name: "결제방식",
      img: "https://wp-blog.toss.im/wp-content/uploads/2019/01/BI_L.png",
    },

    {
      value: "신용카드",
      name: "결제방식",
      img: "https://kr.seaicons.com/wp-content/uploads/2015/10/Credit-Card-2-icon.png",
    },
  ];

  return (
    <div>
      {options.map((e, index) => {
        return (
          <Label onChange={handleInput}>
            <input type="radio" name={e.name} value={e.value} />
            <img src={e.img} />
            <span>{e.value}</span>
          </Label>
        );
      })}
    </div>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  span {
    font-size: 12px;
  }
  img {
    width: 20px;
    object-fit: fill;
  }
  input {
    accent-color: black;
  }
`;
export default SelectCard;
