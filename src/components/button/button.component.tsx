import React, { ReactNode, useEffect } from "react";
import "./button.styles.css";

interface Props {
  color: string;
  backgroundColor: string;
  children?: ReactNode;
  handleClick?: () => void;
}

const CustomButton = ({
  color,
  backgroundColor,
  children,
  handleClick = () => {},
}: Props) => {
  return (
    <button
      className="button-container"
      style={{ color, backgroundColor }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default CustomButton;
