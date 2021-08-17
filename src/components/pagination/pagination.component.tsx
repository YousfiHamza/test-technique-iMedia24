import React from "react";
import "./pagination.styles.css";
import CustomButton from "../button/button.component";

const Pagination = (props: any) => {
  const handleNext = () => {
    if (!props.isLast) props.setPage((prev: number) => prev + 1);
  };
  const handlePrev = () => {
    if (props.page > 1) props.setPage((prev: number) => prev - 1);
  };

  return (
    <div className="pagination-container">
      <CustomButton
        handleClick={handlePrev}
        color="cyan"
        backgroundColor="blue"
      >
        Prev.
      </CustomButton>
      <div className="page-number">{props.page}</div>
      <CustomButton
        handleClick={handleNext}
        color="cyan"
        backgroundColor="blue"
      >
        Next
      </CustomButton>
    </div>
  );
};

export default Pagination;
