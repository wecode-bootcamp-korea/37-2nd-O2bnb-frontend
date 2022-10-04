import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiSearchAlt } from "react-icons/bi";
import { RiSurroundSoundLine } from "react-icons/ri";

function SearchBox() {
  return (
    <SearchBoxWrap>
      <SearchBoxForm>
        <SearchBoxInput
          className="searchBox"
          placeholder="검색어를 입력해 주세요."
        />
        <SearchButton type="submit">
          <BiSearchAlt font-size="25px" />
        </SearchButton>
      </SearchBoxForm>
    </SearchBoxWrap>
  );
}

const SearchBoxWrap = styled.div`
  width: 500px;
  margin: 0 20px;
`;

const SearchBoxForm = styled.form`
  position: relative;
  width: 500px;
`;

const SearchBoxInput = styled.input`
  width: 500px;
  padding: 15px 40px 15px 15px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 31px;
  &:focus {
    box-shadow: 2px 2px 5px #aeaeae;
    transition: 0.1s;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 46px;
  height: 46px;
  border-radius: 0 11px 11px 0;
`;

export default SearchBox;
