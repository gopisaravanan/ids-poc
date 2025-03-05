import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#e90c17",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
