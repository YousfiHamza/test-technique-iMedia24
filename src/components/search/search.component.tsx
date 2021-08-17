import React from "react";
import "./search.styles.css";
import CustomButton from "../../components/button/button.component";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="home-search">
        <input
          className="search-text-input"
          type="text"
          placeholder="Search by Type ..."
        />
        <CustomButton color="yellow" backgroundColor="blue">
          <i className="fab fa-searchengin"></i>
        </CustomButton>
      </div>
    </div>
  );
};

export default SearchBar;
