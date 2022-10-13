import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "./useClickOutside";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiSearchAlt } from "react-icons/bi";

function SearchBox({
  handleInputData,
  searchInputData,
  searchKeywordSubmit,
  searchResultData,
  searchResultModalOpen,
  handleSearchResultModalOpen,
  handleSearchResultModalClose,
}) {
  const [ref, isClickedOutside] = useClickOutside();
  const newSearchResultData = [...searchResultData];
  const moveSerachResultBox = {
    open: {
      top: 62,
      opacity: 1,
      ransition: { ease: "easeInOut", duration: 0.3 },
    },
    close: {
      top: 0,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (isClickedOutside) handleSearchResultModalClose();
  }, [isClickedOutside]);

  return (
    <SearchBoxWrap ref={ref}>
      <SearchBoxForm onSubmit={searchKeywordSubmit}>
        <SearchBoxInput
          type="text"
          className="searchBox"
          placeholder="검색어를 입력해 주세요."
          value={searchInputData}
          onChange={handleInputData}
          onFocus={handleSearchResultModalOpen}
          onKeyDown={handleSearchResultModalOpen}
        />
        <SearchButton type="submit">
          <BiSearchAlt font-size="25px" />
        </SearchButton>
      </SearchBoxForm>
      <SearchResultBoxWrap>
        <SearchResultBox
          animate={
            searchResultModalOpen && searchInputData.length > 0
              ? "open"
              : "close"
          }
          variants={moveSerachResultBox}
        >
          {newSearchResultData.map(data => {
            return (
              <Link
                to={`/product/item-detail?${newSearchResultData[0].id}`}
                key={data.id}
              >
                <SearchResultText>{data.name}</SearchResultText>
              </Link>
            );
          })}
        </SearchResultBox>
      </SearchResultBoxWrap>
    </SearchBoxWrap>
  );
}

const SearchBoxWrap = styled.div`
  position: relative;
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
  box-shadow: ${props =>
    props.searchResultModalOpen ? "2px 2px 5px #aeaeae;" : ""};
  transition: 0.1s;

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

const SearchResultBoxWrap = styled.div`
  position: absolute;
  top: 0px;
  width: 500px;
  height: 220px;
  z-index: -1;
`;

const SearchResultBox = styled(motion.div)`
  position: absolute;
  top: 0px;
  opacity: 0;
  width: 500px;
  min-height: 56px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 31px;
  background-color: #fff;
  box-shadow: 2px 2px 5px #aeaeae;
  transition: 0.1s;
`;

const SearchResultText = styled.div`
  color: #444;
  line-height: 1.5;
`;

export default SearchBox;
