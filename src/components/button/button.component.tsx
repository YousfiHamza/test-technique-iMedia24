import { ReactNode } from "react";
import "./button.styles.css";

interface MyProps {
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
}: MyProps) => {
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
